import { Configuration } from "../Configuration";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { Reward } from "../rewards/Reward";
import { fixSeedExceptions } from "./fixSeedExceptions";
import { populateAndShuffle } from "./populateAndShuffle";
import { seedAbilities } from "./seedAbilities";
import { seedPartyMember } from "./seedPartyMember";
import { seedStats } from "./seedStats";

export type Seed = {
	location: RewardLocation;
	reward: Reward;
};

export const createSeed = (configuration: Configuration): Seed[] => {
	const seed: Seed[] = [];

	const [rewards, locations] = populateAndShuffle(configuration);

	for (const location of locations) {
		seed.push({
			location,
			reward: rewards.shift()!,
		});
	}

	fixSeedExceptions(seed, configuration);

	if (configuration.abilities) {
		seed.push(...seedAbilities(rewards, configuration));
	}

	if (configuration.donaldAbilities) {
		seed.push(...seedPartyMember("Donald", configuration));
	}

	if (configuration.goofyAbilities) {
		seed.push(...seedPartyMember("Goofy", configuration));
	}

	if (configuration.stats) {
		seed.push(...seedStats(configuration));
	}

	return seed;
};
