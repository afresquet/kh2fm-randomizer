import { removeGrowthAbilities } from "../patches/removeGrowthAbilities";
import { removeLevel99Abilities } from "../patches/removeLevel99Abilities";
import { startingAP } from "../patches/startingAP";
import { Seed } from "../seed/Seed";
import { Configuration } from "../settings/Configuration";
import { Leveling, Toggle } from "../settings/enums";
import { createLine } from "./createLine";

export const createPnach = (seed: Seed, configuration: Configuration) => {
	const patches: string[] = [];

	if (configuration.settings.criticalMode === Toggle.OFF) {
		patches.push(startingAP);
	}

	if (configuration.settings.leveling === Leveling.LEVEL_FIFTY) {
		patches.push(removeLevel99Abilities);
	}

	if (configuration.include.growthAbilities) {
		patches.push(removeGrowthAbilities);
	}

	return seed.reduce((result, item) => {
		return result + createLine(item.location.value, item.reward.value);
	}, patches.join("\n"));
};
