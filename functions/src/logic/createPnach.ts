import { Configuration } from "../Configuration";
import { rewardLocations as originalRewardLocations } from "../rewardLocations";
import { criticalRewardLocations } from "../rewardLocations/critical";
import { donaldRewardLocations } from "../rewardLocations/donald";
import { goofyRewardLocations } from "../rewardLocations/goofy";
import { rewards as originalRewards } from "../rewards";
import { criticalRewards } from "../rewards/critical";
import { donaldRewards } from "../rewards/donald";
import { goofyRewards } from "../rewards/goofy";
import { randomizeLevels } from "./randomizeLevels";
import { randomizeLocations } from "./randomizeLocations";
import { randomizeStats } from "./randomizeStats";

export const createPnach = (configuration: Configuration): string => {
	const content: string[] = [];

	const rewards = originalRewards.slice();
	const rewardLocations = originalRewardLocations.slice();

	// Critical Mode
	if (configuration.criticalMode) {
		rewards.push(...criticalRewards);
		rewardLocations.push(...criticalRewardLocations);
	}

	// Donald
	if (configuration.donaldAbilities) {
		rewards.push(...donaldRewards);
		rewardLocations.push(...donaldRewardLocations);
	}

	// Goofy
	if (configuration.goofyAbilities) {
		rewards.push(...goofyRewards);
		rewardLocations.push(...goofyRewardLocations);
	}

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
