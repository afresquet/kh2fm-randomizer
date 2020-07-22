import seedrandom from "seedrandom";
import { abilityLevels } from "../rewardLocations/levels";
import {
	RewardLocation,
	RewardLocationType,
} from "../rewardLocations/RewardLocation";
import { replaceableRewardTypes, Reward, RewardType } from "../rewards/Reward";
import { Configuration } from "../settings/Configuration";
import { Leveling, RandomizingAction, Toggle } from "../settings/enums";
import { abilities } from "./abilities";
import { SeedItem } from "./Seed";
import { keybladeStats, stats } from "./stats";

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
		const excludesReward = location.gameMode?.[
			configuration.gameMode.mode
		]?.exclude?.includes(candidate);
		const excludesRewardType = location.gameMode?.[
			configuration.gameMode.mode
		]?.excludeType?.includes(candidate.type);

		if (
			(includesReward || includesRewardType) &&
			!excludesReward &&
			!excludesRewardType
		)
			return rewards.splice(index, 1)[0];
	} else {
		const excludesReward = location.gameMode?.[
			configuration.gameMode.mode
		]?.exclude?.includes(candidate);
		const excludesRewardType = location.gameMode?.[
			configuration.gameMode.mode
		]?.excludeType?.includes(candidate.type);

		const check = !excludesReward && !excludesRewardType;

		if (
			location.type === RewardLocationType.POPUP
				? candidate.type !== RewardType.ABILITY && check
				: check
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

export function* assign(
	rewards: Reward[],
	rewardLocations: RewardLocation[],
	configuration: Configuration,
	pool = false
): IterableIterator<SeedItem> {
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

		yield* abilities(replaceable, configuration);
	}

	// Include
	for (const location of rewardLocations) {
		if (
			!location.gameMode?.[configuration.gameMode.mode]?.include &&
			!location.gameMode?.[configuration.gameMode.mode]?.includeType
		)
			continue;

		yield {
			location,
			reward: getReward(location, rewards, configuration, true),
		};
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

		yield {
			location,
			reward: getReward(location, rewards, configuration),
		};
	}

	// Rest
	for (const location of rewardLocations) {
		if (
			location.gameMode?.[configuration.gameMode.mode] ||
			location.type === RewardLocationType.POPUP
		)
			continue;

		yield {
			location,
			reward: rewards.shift()!,
		};
	}

	if (!pool && configuration.settings.leveling !== Leveling.LEVEL_ONE) {
		if (configuration.settings.abilities === RandomizingAction.RANDOMIZE) {
			yield* abilities(rewards, configuration);
		}

		if (configuration.settings.stats === Toggle.ON) {
			yield* stats(configuration);
		}

		if (configuration.settings.keybladeStats === Toggle.ON) {
			yield* keybladeStats(configuration);
		}
	}
}
