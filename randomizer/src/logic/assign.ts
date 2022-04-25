import seedrandom from "seedrandom";
import { abilityLevels } from "../rewardLocations/levels";
import { Configuration } from "../types/configuration/Configuration";
import {
	Leveling,
	RandomizingAction,
	Toggle,
} from "../types/configuration/enums";
import { replaceableRewardTypes, Reward, RewardType } from "../types/Reward";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";
import { Seed } from "../types/Seed";
import { abilities } from "./abilities";
import { keybladeStats, stats } from "./stats";

const getReward = (
	seed: Seed,
	location: RewardLocation,
	rewards: Reward[],
	configuration: Configuration,
	include?: boolean,
	nextIndex?: number
): Reward => {
	let index = nextIndex;

	if (index === undefined) {
		const seeder = seedrandom(configuration.name + location.value);

		index = Math.floor(seeder() * rewards.length);
	}

	const candidate = rewards[index];

	const dependencyConflict = location.gameMode?.[
		configuration.gameMode.mode
	]?.dependencies?.some(depency => {
		if (candidate !== depency.candidate) return false;

		const other = seed.find(item => item.location.value === depency.address);

		if (!other) return false;

		if (depency.conflict.includes(other.reward)) return true;

		return false;
	});

	if (include) {
		const includesReward = location.gameMode?.[
			configuration.gameMode.mode
		]?.include?.includes(candidate);
		const includesRewardType = location.gameMode?.[
			configuration.gameMode.mode
		]?.includeType?.includes(candidate.type);
		const excludesReward = location.gameMode?.[
			configuration.gameMode.mode
		]?.exclude?.includes(candidate);
		const excludesRewardType = location.gameMode?.[
			configuration.gameMode.mode
		]?.excludeType?.includes(candidate.type);

		if (
			(includesReward || includesRewardType) &&
			!excludesReward &&
			!excludesRewardType &&
			!dependencyConflict
		)
			return rewards.splice(index, 1)[0];
	} else {
		const excludesReward = location.gameMode?.[
			configuration.gameMode.mode
		]?.exclude?.includes(candidate);
		const excludesRewardType = location.gameMode?.[
			configuration.gameMode.mode
		]?.excludeType?.includes(candidate.type);

		const check = !excludesReward && !excludesRewardType && !dependencyConflict;

		if (
			location.type === RewardLocationType.POPUP
				? candidate.type !== RewardType.ABILITY && check
				: check
		)
			return rewards.splice(index, 1)[0];
	}

	return getReward(
		seed,
		location,
		rewards,
		configuration,
		include,
		(index + 1) % rewards.length
	);
};

export function assign(
	rewards: Reward[],
	rewardLocations: RewardLocation[],
	configuration: Configuration,
	pool = false
): Seed {
	const seed: Seed = [];

	if (
		!pool &&
		configuration.settings.leveling !== Leveling.LEVEL_ONE &&
		configuration.settings.abilities === RandomizingAction.REPLACE
	) {
		const replaceable: Reward[] = [];

		while (replaceable.length < abilityLevels.length) {
			const reward = rewards.find(r =>
				replaceableRewardTypes.includes(r.type)
			)!;

			replaceable.push(rewards.splice(rewards.indexOf(reward), 1)[0]);
		}

		seed.push(...abilities(replaceable, configuration));
	}

	// Include
	for (const location of rewardLocations) {
		if (
			!location.gameMode?.[configuration.gameMode.mode]?.include &&
			!location.gameMode?.[configuration.gameMode.mode]?.includeType
		)
			continue;

		seed.push({
			location,
			reward: getReward(seed, location, rewards, configuration, true),
		});
	}

	// Exclude
	for (const location of rewardLocations) {
		if (
			location.gameMode?.[configuration.gameMode.mode]?.include ||
			location.gameMode?.[configuration.gameMode.mode]?.includeType
		)
			continue;

		if (
			!location.gameMode?.[configuration.gameMode.mode]?.exclude &&
			!location.gameMode?.[configuration.gameMode.mode]?.excludeType &&
			location.type !== RewardLocationType.POPUP
		)
			continue;

		seed.push({
			location,
			reward: getReward(seed, location, rewards, configuration),
		});
	}

	// Rest
	for (const location of rewardLocations) {
		if (
			location.gameMode?.[configuration.gameMode.mode]?.include ||
			location.gameMode?.[configuration.gameMode.mode]?.includeType ||
			location.gameMode?.[configuration.gameMode.mode]?.exclude ||
			location.gameMode?.[configuration.gameMode.mode]?.excludeType ||
			location.type === RewardLocationType.POPUP
		)
			continue;

		seed.push({
			location,
			reward: rewards.shift()!,
		});
	}

	if (!pool && configuration.settings.leveling !== Leveling.LEVEL_ONE) {
		if (configuration.settings.abilities === RandomizingAction.RANDOMIZE) {
			seed.push(...abilities(rewards, configuration));
		}

		if (configuration.settings.stats === Toggle.ON) {
			seed.push(...stats(configuration));
		}
	}

	if (
		!pool &&
		configuration.settings.keybladeStats !== RandomizingAction.VANILLA
	) {
		seed.push(...keybladeStats(configuration));
	}

	return seed;
}
