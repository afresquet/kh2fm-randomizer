import seedrandom from "seedrandom";
import {
	RewardLocation,
	RewardLocationType,
} from "../rewardLocations/RewardLocation";
import { Reward, RewardType } from "../rewards/Reward";
import { Configuration } from "../settings/Configuration";
import { Seed } from "./Seed";

const getReward = (
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

	if (include) {
		const includesReward = location.gameMode?.[
			configuration.gameMode.mode
		]?.include?.includes(candidate);
		const includesRewardType = location.gameMode?.[
			configuration.gameMode.mode
		]?.includeType?.includes(candidate.type);

		if (includesReward || includesRewardType)
			return rewards.splice(index, 1)[0];
	} else {
		const excludesReward = location.gameMode?.[
			configuration.gameMode.mode
		]?.exclude?.includes(candidate);
		const excludesRewardType = location.gameMode?.[
			configuration.gameMode.mode
		]?.excludeType?.includes(candidate.type);

		if (
			location.type === RewardLocationType.POPUP
				? candidate.type !== RewardType.ABILITY &&
				  (!excludesReward || !excludesRewardType)
				: !excludesReward || !excludesRewardType
		)
			return rewards.splice(index, 1)[0];
	}

	return getReward(
		location,
		rewards,
		configuration,
		include,
		(index + 1) % rewards.length
	);
};

export const assign = (
	seed: Seed,
	rewards: Reward[],
	rewardLocations: RewardLocation[],
	configuration: Configuration
) => {
	// Include
	for (const location of rewardLocations) {
		if (
			!location.gameMode?.[configuration.gameMode.mode]?.include &&
			!location.gameMode?.[configuration.gameMode.mode]?.includeType
		)
			continue;

		seed.push({
			location,
			reward: getReward(location, rewards, configuration, true),
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
			reward: getReward(location, rewards, configuration),
		});
	}

	// Rest
	for (const location of rewardLocations) {
		if (
			location.gameMode?.[configuration.gameMode.mode] ||
			location.type === RewardLocationType.POPUP
		)
			continue;

		seed.push({
			location,
			reward: rewards.shift()!,
		});
	}
};
