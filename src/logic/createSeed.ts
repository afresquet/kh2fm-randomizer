import { shuffle } from "../helpers/shuffle";
import { donaldRewardLocations } from "../rewardLocations/donald";
import { goofyRewardLocations } from "../rewardLocations/goofy";
import { Configuration } from "../types/configuration/Configuration";
import { Toggle } from "../types/configuration/enums";
import { Seed } from "../types/Seed";
import { assign } from "./assign";
import { bonusModifiers } from "./bonusModifiers";
import { populate } from "./populate";
import { randomizePool } from "./randomizePool";

export const createSeed = (configuration: Configuration): Seed => {
	const [rewards, rewardLocations] = populate(configuration);

	const seed = [
		...assign(
			[...shuffle(rewards, configuration.name)],
			rewardLocations,
			configuration
		),
	];

	if (configuration.settings.bonusModifiers === Toggle.ON) {
		seed.push(...bonusModifiers(configuration));
	}

	if (configuration.include.donaldAbilities) {
		seed.push(...randomizePool(donaldRewardLocations, configuration));
	}

	if (configuration.include.goofyAbilities) {
		seed.push(...randomizePool(goofyRewardLocations, configuration));
	}

	return seed;
};
