import seedrandom from "seedrandom";
import { Configuration } from "../Configuration";
import { RewardLocationType } from "../rewardLocations/RewardLocation";
import { RewardType } from "../rewards/Reward";
import { Seed } from "./createSeed";

const getReplaceable = (
	seed: Seed[],
	current: Seed,
	configuration: Configuration,
	nextIndex?: number
): Seed => {
	let index = nextIndex;

	if (nextIndex === undefined) {
		const seeder = seedrandom(configuration.seed + current.location.value);

		index = Math.floor(seeder() * seed.length);
	}

	const candidate = seed[index!];

	if (
		!current.location.gameMode?.[configuration.gameMode.mode]?.[
			configuration.gameMode.version
		]?.exclude?.includes(candidate.reward) &&
		!candidate.location.gameMode?.[configuration.gameMode.mode]?.[
			configuration.gameMode.version
		]?.exclude?.includes(current.reward) &&
		current.reward !== candidate.reward
	) {
		return candidate;
	}

	return getReplaceable(
		seed,
		current,
		configuration,
		(index! + 1) % seed.length
	);
};

const getReplaceableByType = (
	seed: Seed[],
	current: Seed,
	typesToOmit: RewardType[],
	configuration: Configuration,
	nextIndex?: number
): Seed => {
	let index = nextIndex;

	if (nextIndex === undefined) {
		const seeder = seedrandom(configuration.seed + current.location.value);

		index = Math.floor(seeder() * seed.length);
	}

	const candidate = seed[index!];

	if (
		!typesToOmit.includes(candidate.reward.type) &&
		!current.location.gameMode?.[configuration.gameMode.mode]?.[
			configuration.gameMode.version
		]?.exclude?.includes(candidate.reward) &&
		!candidate.location.gameMode?.[configuration.gameMode.mode]?.[
			configuration.gameMode.version
		]?.exclude?.includes(current.reward) &&
		current.reward !== candidate.reward
	) {
		return candidate;
	}

	return getReplaceableByType(
		seed,
		current,
		typesToOmit,
		configuration,
		(index! + 1) % seed.length
	);
};

export const fixSeedExceptions = (
	seed: Seed[],
	configuration: Configuration
): void => {
	for (const iteration of seed) {
		if (
			iteration.location.gameMode?.[configuration.gameMode.mode]?.[
				configuration.gameMode.version
			]?.exclude?.includes(iteration.reward)
		) {
			const replaceable = getReplaceable(seed, iteration, configuration);

			[iteration.reward, replaceable.reward] = [
				replaceable.reward,
				iteration.reward,
			];
		}
	}

	// Fix abilities on popups
	for (const iteration of seed) {
		if (
			iteration.location.type === RewardLocationType.POPUP &&
			(iteration.reward.type === RewardType.ABILITY ||
				iteration.reward.type === RewardType.LIMIT)
		) {
			const replaceable = getReplaceableByType(
				seed,
				iteration,
				[RewardType.ABILITY, RewardType.LIMIT],
				configuration
			);

			[iteration.reward, replaceable.reward] = [
				replaceable.reward,
				iteration.reward,
			];
		}
	}
};
