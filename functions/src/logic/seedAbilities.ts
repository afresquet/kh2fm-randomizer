import { Configuration } from "../Configuration";
import { abilityLevels, levels } from "../rewardLocations/levels";
import { RewardLocationType } from "../rewardLocations/RewardLocation";
import { Reward } from "../rewards/Reward";
import { Seed } from "./createSeed";
import { level50delete, level50levels } from "./level50Abilities";

export function* seedAbilities(
	rewards: Reward[],
	configuration: Configuration
): IterableIterator<Seed> {
	for (let i = 0; i < rewards.length; i++) {
		const level = configuration.level50
			? levels.find(level => level.level === level50levels[i])!
			: abilityLevels[i];

		let swordReward: any = { value: "0000" };
		let staffReward: any = { value: "0000" };
		let shieldReward: any = { value: "0000" };

		swordReward = rewards[i];

		const staffLevel = abilityLevels.find(
			lvl =>
				lvl.abilities.staff.reward === abilityLevels[i].abilities.sword.reward
		)!;
		const staffIndex = abilityLevels.indexOf(staffLevel);

		const shieldLevel = abilityLevels.find(
			lvl =>
				lvl.abilities.shield.reward === abilityLevels[i].abilities.sword.reward
		)!;
		const shieldIndex = abilityLevels.indexOf(shieldLevel);

		// Why this works like this is beyond me
		staffReward = rewards[shieldIndex];
		shieldReward = rewards[staffIndex];

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				description: `LV${level.level} (Sword)`,
				value: level.abilities.sword.value,
				reward: abilityLevels[i].abilities.sword.reward!,
			},
			reward: swordReward,
		};

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				description: `LV${level.level} (Staff)`,
				value: level.abilities.staff.value,
				reward: abilityLevels[i].abilities.staff.reward!,
			},
			reward: staffReward,
		};

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				description: `LV${level.level} (Shield)`,
				value: level.abilities.shield.value,
				reward: abilityLevels[i].abilities.shield.reward!,
			},
			reward: shieldReward,
		};
	}

	if (configuration.level50) {
		for (const levelToDelete of level50delete) {
			const level = levels.find(level => level.level === levelToDelete)!;

			yield {
				location: {
					value: level.abilities.sword.value,
					reward: {} as any,
				} as any,
				reward: { value: "00000000" } as any,
			};

			yield {
				location: {
					value: level.abilities.staff.value,
					reward: {} as any,
				} as any,
				reward: { value: "00000000" } as any,
			};

			yield {
				location: {
					value: level.abilities.shield.value,
					reward: {} as any,
				} as any,
				reward: { value: "00000000" } as any,
			};
		}
	}
}
