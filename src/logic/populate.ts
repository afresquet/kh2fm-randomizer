import seedrandom from "seedrandom";
import { filterByWorld } from "../helpers/filterByWorld";
import { absentSilhouettesRewardLocations } from "../rewardLocations/absentSilhouettes";
import { agrabahRewardLocations } from "../rewardLocations/agrabah";
import { atlanticaRewardLocations } from "../rewardLocations/atlantica";
import { beastsCastleRewardLocations } from "../rewardLocations/beastsCastle";
import { cavernOfRememberanceRewardLocations } from "../rewardLocations/cavernOfRememberance";
import { criticalRewardLocations } from "../rewardLocations/critical";
import { dataOrganizationXIIIRewardLocations } from "../rewardLocations/dataOrganizationXIII";
import { disneyCastleRewardLocations } from "../rewardLocations/disneyCastle";
import { formRewardLocations } from "../rewardLocations/form";
import { halloweenTownRewardLocations } from "../rewardLocations/halloweenTown";
import { hollowBastionRewardLocations } from "../rewardLocations/hollowBastion";
import { keybladeRewardLocations } from "../rewardLocations/keyblades";
import { landOfDragonsRewardLocations } from "../rewardLocations/landOfDragons";
import { abilityLevels } from "../rewardLocations/levels";
import { olympusRewardLocations } from "../rewardLocations/olympus";
import { olympusCupsRewardLocations } from "../rewardLocations/olympusCups";
import { poohRewardLocations } from "../rewardLocations/pooh";
import { portRoyalRewardLocations } from "../rewardLocations/portRoyal";
import { prideLandsRewardLocations } from "../rewardLocations/prideLands";
import { simulatedTwilightTownRewardLocations } from "../rewardLocations/simulatedTwilightTown";
import { spaceParanoidsRewardLocations } from "../rewardLocations/spaceParanoids";
import { timelessRiverRewardLocations } from "../rewardLocations/timelessRiver";
import { twilightTownRewardLocations } from "../rewardLocations/twilightTown";
import { twtnwRewardLocations } from "../rewardLocations/twtnw";
import { Rewards } from "../rewards";
import { abilityRewards } from "../rewards/ability";
import { growthAbilityRewards } from "../rewards/growthAbility";
import { Configuration } from "../types/configuration/Configuration";
import {
	GameMode,
	Leveling,
	RandomizingAction,
	Toggle,
} from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { replaceableRewardTypes, Reward, RewardType } from "../types/Reward";
import { RewardLocation } from "../types/RewardLocation";

const createReplacer = (rewards: Reward[], configuration: Configuration) => {
	const replaceWith = (reward: Reward, nextIndex?: number): void => {
		let index = nextIndex;

		if (nextIndex === undefined) {
			const seeder = seedrandom(configuration.name + reward.value);

			index = Math.floor(seeder() * rewards.length);
		}

		if (replaceableRewardTypes.includes(rewards[index!].type)) {
			rewards[index!] = reward;

			return;
		}

		return replaceWith(reward, (index! + 1) % rewards.length);
	};

	return replaceWith;
};

export const populate = (
	configuration: Configuration
): [Reward[], RewardLocation[]] => {
	const rewards: Reward[] = [];
	const locations: RewardLocation[] = [];

	function push(
		locationArray: RewardLocation[],
		randomizingAction?: RandomizingAction
	) {
		if (randomizingAction === RandomizingAction.VANILLA) return;

		rewards.push(...locationArray.map(location => location.reward));

		if (randomizingAction === RandomizingAction.REPLACE) {
			locations.push(
				...locationArray.map<RewardLocation>(location => ({
					...location,
					gameMode: {
						...(location.gameMode || {}),
						[configuration.gameMode.mode]: {
							...(location.gameMode?.[configuration.gameMode.mode] || {}),
							includeType: [
								...(location.gameMode?.[configuration.gameMode.mode]
									?.includeType || []),
								...replaceableRewardTypes,
							],
						},
					},
				}))
			);

			return;
		}

		locations.push(
			...locationArray.map<RewardLocation>(location => {
				const excludeType: RewardType[] = [
					...(location.gameMode?.[configuration.gameMode.mode]?.excludeType ||
						[]),
				];

				if (
					configuration.settings.reportDepth === RandomizingAction.VANILLA &&
					location.secondVisit
				) {
					excludeType.push(RewardType.REPORT);
				} else if (
					configuration.settings.reportDepth === RandomizingAction.REPLACE &&
					[
						LocationName.ABSENT_SILHOUETTE,
						LocationName.DATA_ORGANIZATION_XIII,
					].includes(location.location) &&
					location.secondVisit
				) {
					excludeType.push(RewardType.REPORT);
				}

				return {
					...location,
					gameMode: {
						...(location.gameMode || {}),
						[configuration.gameMode.mode]: {
							...(location.gameMode?.[configuration.gameMode.mode] || {}),
							excludeType: excludeType.length ? excludeType : undefined,
						},
					},
				};
			})
		);
	}

	const replaceWith = createReplacer(rewards, configuration);

	// Form Abilities
	push(
		formRewardLocations.filter((_, index) => index % 2 === 0),
		configuration.include.formAbilities
	);

	// Form Growth Abilities
	push(
		formRewardLocations.filter((_, index) => index % 2 !== 0),
		configuration.include.growthAbilities
	);

	// Roxas World
	push(
		simulatedTwilightTownRewardLocations,
		configuration.worlds.simulatedTwilightTown
	);

	// Twilight Town
	push(twilightTownRewardLocations, configuration.worlds.twilightTown);

	// Hollow Bastion
	push(
		hollowBastionRewardLocations.map(location => {
			if (location.value !== "11CE0942" || configuration.include.sephiroth)
				return location;

			return {
				...location,
				gameMode: {
					[configuration.gameMode.mode]: {
						includeType: replaceableRewardTypes,
					},
				},
			};
		}),
		configuration.worlds.hollowBastion
	);

	// Cavern of Remembrance
	if (
		(configuration.settings.criticalMode === Toggle.OFF &&
			configuration.settings.leveling === Leveling.LEVEL_ONE) ||
		configuration.gameMode.goa.goMode
	) {
		push(
			cavernOfRememberanceRewardLocations.filter(
				location => location.description !== "Garden of Assemblage"
			),
			configuration.worlds.cavernOfRemembrance
		);

		const rewards: Reward[] = [];
		if (
			configuration.settings.criticalMode === Toggle.OFF &&
			configuration.settings.leveling === Leveling.LEVEL_ONE
		) {
			rewards.push(Rewards.SCAN, Rewards.GUARD, Rewards.NO_EXPERIENCE);
		} else if (configuration.gameMode.goa.goMode) {
			rewards.push(
				Rewards.PROOF_OF_CONNECTION,
				Rewards.PROOF_OF_PEACE,
				Rewards.PROOF_OF_NONEXISTENCE
			);
		}

		const gardenLocations = cavernOfRememberanceRewardLocations
			.filter(location => location.description === "Garden of Assemblage")
			.map((location, index) => ({
				...location,
				gameMode: {
					...(location.gameMode || {}),
					[configuration.gameMode.mode]: {
						...(location.gameMode?.[configuration.gameMode.mode] || {}),
						include: [rewards[index]],
					},
				},
			}));

		push(gardenLocations, RandomizingAction.RANDOMIZE);

		if (
			configuration.settings.criticalMode === Toggle.OFF &&
			configuration.settings.leveling === Leveling.LEVEL_ONE
		) {
			if (
				configuration.worlds.simulatedTwilightTown !== RandomizingAction.VANILLA
			) {
				replaceWith(Rewards.NO_EXPERIENCE);
			} else {
				rewards.forEach(bonus => replaceWith(bonus));
			}
		}
	} else {
		push(
			cavernOfRememberanceRewardLocations,
			configuration.worlds.cavernOfRemembrance
		);
	}

	// Absent Silhouettes
	push(
		absentSilhouettesRewardLocations.filter(filterByWorld(configuration)),

		configuration.include.absentSilhouettes
	);

	// Data Organization XIII
	push(
		dataOrganizationXIIIRewardLocations.filter(filterByWorld(configuration)),
		configuration.include.dataOrganizationXIII
	);

	// Add the members that have AS fights
	if (
		configuration.include.absentSilhouettes === RandomizingAction.RANDOMIZE &&
		configuration.include.dataOrganizationXIII === RandomizingAction.VANILLA
	) {
		push(
			dataOrganizationXIIIRewardLocations
				.filter(location => location.reward === Rewards.LOST_ILLUSION)
				.filter(filterByWorld(configuration)),
			RandomizingAction.RANDOMIZE
		);
	}

	// Beasts Castle
	push(beastsCastleRewardLocations, configuration.worlds.beastsCastle);

	// Olympus Colisseum
	push(olympusRewardLocations, configuration.worlds.olympus);

	// Olympus Cups
	push(
		olympusCupsRewardLocations.map(location => {
			if (location.value !== "11CE0996" || configuration.include.hadesCup)
				return location;

			return {
				...location,
				gameMode: {
					[configuration.gameMode.mode]: {
						includeType: replaceableRewardTypes,
					},
				},
			};
		}),
		configuration.include.olympusCups
	);

	// Agrabah
	push(agrabahRewardLocations, configuration.worlds.agrabah);

	// Land of Dragons
	push(landOfDragonsRewardLocations, configuration.worlds.landOfDragons);

	// 100 Acre Wood
	push(poohRewardLocations, configuration.worlds.pooh);

	// Atlantica
	push(atlanticaRewardLocations, configuration.worlds.atlantica);

	// Pride Lands
	push(prideLandsRewardLocations, configuration.worlds.prideLands);

	// Disney Castle
	push(
		disneyCastleRewardLocations.map(location => {
			if (
				!["11CE0B16", "11CE0B22"].includes(location.value) ||
				configuration.include.terra
			)
				return location;

			return {
				...location,
				gameMode: {
					[configuration.gameMode.mode]: {
						includeType: replaceableRewardTypes,
					},
				},
			};
		}),
		configuration.worlds.disneyCastle
	);

	// Timeless River
	push(timelessRiverRewardLocations, configuration.worlds.timelessRiver);

	// Halloween Town
	push(halloweenTownRewardLocations, configuration.worlds.halloweenTown);

	// Port Royal
	push(portRoyalRewardLocations, configuration.worlds.portRoyal);

	// Space Paranoids
	push(spaceParanoidsRewardLocations, configuration.worlds.spaceParanoids);

	// The World That Never Was
	push(twtnwRewardLocations, configuration.worlds.twtnw);

	// Leveling
	if (configuration.settings.leveling === Leveling.LEVEL_ONE) {
		if (configuration.settings.criticalMode === Toggle.ON) {
			if (
				configuration.worlds.simulatedTwilightTown === RandomizingAction.VANILLA
			) {
				[Rewards.SCAN, Rewards.GUARD, Rewards.AERIAL_RECOVERY].forEach(reward =>
					replaceWith(reward)
				);
			}

			for (const location of criticalRewardLocations) {
				if (!["11D18DE4", "11D18DE6", "11D18DE0"].includes(location.value))
					continue;

				let include: Reward[] = [];

				if (location.value === "11D18DE4") {
					include.push(Rewards.SCAN);
				} else if (location.value === "11D18DE6") {
					include.push(Rewards.GUARD);
				} else if (location.value === "11D18DE0") {
					include.push(Rewards.AERIAL_RECOVERY);
				}

				rewards.push(location.reward);
				locations.push({
					...location,
					gameMode: {
						[configuration.gameMode.mode]: {
							include,
						},
					},
				});
			}
		}
	} else {
		if (configuration.settings.abilities !== RandomizingAction.VANILLA) {
			rewards.push(
				...abilityLevels.map(level => level.abilities.sword.reward!)
			);
		}

		if (configuration.settings.criticalMode === Toggle.ON) {
			push(criticalRewardLocations);
		}
	}

	if (configuration.include.keybladeAbilities !== RandomizingAction.VANILLA) {
		push(
			keybladeRewardLocations
				.map<RewardLocation>(({ values, ability, ...location }) => ({
					...location,
					value: values.ability,
					reward: ability,
					gameMode: {
						[configuration.gameMode.mode]: {
							includeType: RewardType.ABILITY,
							exclude:
								configuration.include.keybladeAbilities ===
								RandomizingAction.RANDOMIZE
									? Object.values(growthAbilityRewards)
									: [
											...Object.values(growthAbilityRewards),
											...Object.values(abilityRewards).slice(0, 25),
									  ],
						},
					},
				}))
				.filter(
					filterByWorld(
						configuration,
						world => world === RandomizingAction.VANILLA
					)
				)
		);
	}

	if (configuration.include.donaldAbilities === Toggle.ON) {
		[
			Rewards.SHAMANS_RELIC,
			Rewards.NOBODY_LANCE,
			Rewards.CENTURION_PLUS,
			Rewards.SAVE_THE_QUEEN_PLUS,
			Rewards.PRECIOUS_MUSHROOM,
			Rewards.PRECIOUS_MUSHROOM_PLUS,
			Rewards.PREMIUM_MUSHROOM,
		].forEach(reward => replaceWith(reward));
	}

	if (configuration.include.goofyAbilities === Toggle.ON) {
		[
			Rewards.FROZEN_PRIDE_PLUS,
			Rewards.NOBODY_GUARD,
			Rewards.AKASHIC_RECORD,
			Rewards.SAVE_THE_KING_PLUS,
			Rewards.MAJESTIC_MUSHROOM,
			Rewards.MAJESTIC_MUSHROOM_PLUS,
			Rewards.ULTIMATE_MUSHROOM,
		].forEach(reward => replaceWith(reward));
	}

	if (configuration.include.ultimaWeapon === Toggle.ON) {
		replaceWith(Rewards.ULTIMA_WEAPON);
	}

	if (configuration.include.maxGrowthAbilities === Toggle.ON) {
		[
			Rewards.HIGH_JUMP_MAX,
			Rewards.QUICK_RUN_MAX,
			Rewards.DODGE_ROLL_MAX,
			Rewards.AERIAL_DODGE_MAX,
			Rewards.GLIDE_MAX,
		].forEach(reward => replaceWith(reward));
	}

	if (configuration.include.finalForm === Toggle.ON) {
		replaceWith(Rewards.FINAL_FORM);
	}

	if (configuration.include.synthItems === Toggle.ON) {
		[
			Rewards.ELIXIR,
			Rewards.MEGA_ELIXIR,
			Rewards.HIGH_DRIVE_RECOVERY,
			Rewards.LUCKY_RING,
			Rewards.SHADOW_ARCHIVE_PLUS,
			Rewards.FULL_BLOOM_PLUS,
			Rewards.SHOCK_CHARM_PLUS,
			Rewards.RIBBON,
		].forEach(reward => replaceWith(reward));
	}

	if (configuration.gameMode.mode === GameMode.GOA_MOD) {
		if (configuration.gameMode.goa.promiseCharm === Toggle.ON) {
			replaceWith(Rewards.PROMISE_CHARM);
		}

		if (
			configuration.worlds.cavernOfRemembrance === RandomizingAction.VANILLA
		) {
			push([
				cavernOfRememberanceRewardLocations.find(
					location => location.reward === Rewards.PROOF_OF_NONEXISTENCE
				)!,
			]);
		}

		if (configuration.worlds.hollowBastion === RandomizingAction.VANILLA) {
			push([
				hollowBastionRewardLocations.find(
					location => location.reward === Rewards.PROOF_OF_PEACE
				)!,
			]);
		}

		if (configuration.worlds.disneyCastle === RandomizingAction.VANILLA) {
			push([
				disneyCastleRewardLocations.find(
					location => location.reward === Rewards.PROOF_OF_CONNECTION
				)!,
			]);
		}
	}

	return [rewards, locations];
};
