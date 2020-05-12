import { Configuration } from "../Configuration";
import { abilityLevels } from "../rewardLocations/levels";
import { RewardLocationType } from "../rewardLocations/RewardLocation";
import { Reward } from "../rewards/Reward";
import { Seed } from "./createSeed";

export function* seedAbilities(
	rewards: Reward[],
	configuration: Configuration
): IterableIterator<Seed> {
	for (let i = 0; i < rewards.length; i++) {
		const level = abilityLevels[i];

		let swordReward: any = { value: "0000" };
		let staffReward: any = { value: "0000" };
		let shieldReward: any = { value: "0000" };

		swordReward = rewards[i];

		const staffLevel = abilityLevels.find(
			lvl => lvl.abilities.staff.reward === level.abilities.sword.reward
		)!;
		const staffIndex = abilityLevels.indexOf(staffLevel);

		const shieldLevel = abilityLevels.find(
			lvl => lvl.abilities.shield.reward === level.abilities.sword.reward
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
				reward: level.abilities.sword.reward!,
			},
			reward: swordReward,
		};

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				description: `LV${level.level} (Staff)`,
				value: level.abilities.staff.value,
				reward: level.abilities.staff.reward!,
			},
			reward: staffReward,
		};

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				description: `LV${level.level} (Shield)`,
				value: level.abilities.shield.value,
				reward: level.abilities.shield.reward!,
			},
			reward: shieldReward,
		};
	}
}
