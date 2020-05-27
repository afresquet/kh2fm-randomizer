import { Configuration } from "../Configuration";
import { removeGrowthAbilities } from "../patches/removeGrowthAbilities";
import { SeedArray } from "../SeedArray";
import { createLine } from "./createLine";

export const createPnach = (seed: SeedArray, configuration: Configuration) => {
	const patches: string[] = [];

	if (configuration.growthAbilities) {
		patches.push(removeGrowthAbilities);
	}

	return seed.reduce((result, item) => {
		return result + createLine(item.location.value, item.reward.value);
	}, patches.join("\n"));
};
