import { expMultiplier } from "../patches/expMultiplier";
import { formEXPPatch } from "../patches/formEXP";
import {
	formKeybladesAbilities,
	formKeybladesStats,
} from "../patches/formKeyblades";
import { removeGrowthAbilities } from "../patches/removeGrowthAbilities";
import { removeLevel99Abilities } from "../patches/removeLevel99Abilities";
import { shorterDay5 } from "../patches/shorterDay5";
import { startingAP } from "../patches/startingAP";
import { Seed } from "../seed/Seed";
import { Configuration } from "../settings/Configuration";
import {
	Leveling,
	Multiplier,
	RandomizingAction,
	Toggle,
} from "../settings/enums";
import { createLine } from "./createLine";

export const createPnach = (seed: Seed, configuration: Configuration) => {
	const patches: string[] = [];

	if (configuration.settings.criticalMode === Toggle.OFF) {
		patches.push(startingAP);
	}

	if (configuration.gameMode.goa.shorterDay5 === Toggle.ON) {
		patches.push(shorterDay5);
	}

	if (configuration.settings.leveling === Leveling.LEVEL_FIFTY) {
		patches.push(removeLevel99Abilities);
	}

	if (configuration.include.growthAbilities) {
		patches.push(removeGrowthAbilities);
	}

	patches.push(formKeybladesStats);

	if (configuration.include.keybladeAbilities === RandomizingAction.VANILLA) {
		patches.push(formKeybladesAbilities);
	}

	if (configuration.settings.expMultiplier !== Multiplier.ONE) {
		patches.push(...expMultiplier(configuration));
	}

	patches.push(formEXPPatch(configuration));

	return seed.reduce((result, item) => {
		return result + createLine(item.location.value, item.reward.value);
	}, patches.join("\n"));
};
