import { rewards as originalRewards } from "../rewards";
import { randomizeLevels } from "./randomizeLevels";
import { randomizeLocations } from "./randomizeLocations";
import { randomizeStats } from "./randomizeStats";

export const createPnach = (seed: string): string => {
	const content: string[] = [];

	const rewards = originalRewards.slice();

	content.push(randomizeLocations(seed, rewards));

	content.push(randomizeLevels(seed, rewards));

	content.push(randomizeStats(seed));

	return content.join("\n");
};
