import { Configuration } from "../Configuration";
import { createShuffledRewardLocations } from "../helpers/createShuffledRewardLocations";
import { createShuffledRewards } from "../helpers/createShuffledRewards";
import { randomizeLevels } from "./randomizeLevels";
import { randomizeLocations } from "./randomizeLocations";
import { randomizeStats } from "./randomizeStats";

export const createPnach = (configuration: Configuration): string => {
	const content: string[] = [];

	const rewards = createShuffledRewards(configuration);
	const rewardLocations = createShuffledRewardLocations(configuration);

	// Locations
	content.push(randomizeLocations(configuration, rewards, rewardLocations));

	// Levels
	content.push(randomizeLevels(configuration, rewards));

	// Stats
	if (configuration.stats) {
		content.push(randomizeStats(configuration));
	}

	return content.join("\n");
};
