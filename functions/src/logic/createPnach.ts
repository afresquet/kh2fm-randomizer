import { Configuration } from "../Configuration";
import { rewards as originalRewards } from "../rewards";
import { randomizeLevels } from "./randomizeLevels";
import { randomizeLocations } from "./randomizeLocations";
import { randomizeStats } from "./randomizeStats";

export const createPnach = (configuration: Configuration): string => {
	const content: string[] = [];

	const rewards = originalRewards.slice();

	content.push(randomizeLocations(configuration, rewards));

	content.push(randomizeLevels(configuration, rewards));

	content.push(randomizeStats(configuration));

	return content.join("\n");
};
