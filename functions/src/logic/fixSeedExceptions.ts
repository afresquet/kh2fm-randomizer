import seedrandom from "seedrandom";
import { Configuration } from "../Configuration";
import { Reward } from "../rewards/Reward";
import { Seed } from "./createSeed";

const getReplaceable = (
	seed: Seed[],
	rewardToOmit: Reward,
	configuration: Configuration,
	nextIndex?: number
): Seed => {
	let index = nextIndex;

	if (!nextIndex) {
		const seeder = seedrandom(
			configuration.seed + "replaceable" + seed.length.toString()
		);

		index = Math.floor(seeder() * seed.length);
	}

	const candidate = seed[index!];

	if (
		!candidate.location.gameMode?.[configuration.gameMode.mode]?.[
			configuration.gameMode.version
		]?.exclude?.includes(rewardToOmit)
	) {
		return candidate;
	}

	return getReplaceable(
		seed,
		rewardToOmit,
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
			const replaceable = getReplaceable(seed, iteration.reward, configuration);

			[iteration.reward, replaceable.reward] = [
				replaceable.reward,
				iteration.reward,
			];
		}
	}
};
