import { Configuration, Seed } from "..";
import { initialSetup, partyMemberWeapons } from "../patches";
import { earlyLionDash } from "../patches/earlyLionDash";
import { expMultiplier } from "../patches/expMultiplier";
import { fasterOogie } from "../patches/fasterOogie";
import { fasterPresents } from "../patches/fasterPresents";
import { fastHyenasTwo } from "../patches/fastHyenasTwo";
import { formEXPPatch } from "../patches/formEXP";
import {
	formKeybladesAbilities,
	formKeybladesStats,
} from "../patches/formKeyblades";
import { inGameSettings } from "../patches/inGameSettings";
import { levelOneEXP } from "../patches/levelOneEXP";
import { partyMemberActionAbilities } from "../patches/partyMemberActionAbilities";
import {
	removeGrowthAbilities,
	removeMaxGrowthAbilities,
} from "../patches/removeGrowthAbilities";
import { removeLevel99Abilities } from "../patches/removeLevel99Abilities";
import { shorterDay5 } from "../patches/shorterDay5";
import { skipDragon } from "../patches/skipDragon";
import { startingAP } from "../patches/startingAP";
import {
	Leveling,
	Multiplier,
	RandomizingAction,
	Toggle,
} from "../types/configuration/enums";
import { File } from "../types/File";
import { createLine } from "./createLine";

export const createFile = (
	seed: Seed,
	configuration: Configuration,
	file: File
) => {
	const patches: string[] = [initialSetup(configuration.name, file)];

	if (configuration.settings.criticalMode === Toggle.OFF) {
		patches.push(startingAP[file]);
	}

	if (configuration.gameMode.goa.shorterDay5 === Toggle.ON) {
		patches.push(shorterDay5[file]);
	}

	if (configuration.gameMode.goa.fasterOogie === Toggle.ON) {
		patches.push(fasterOogie[file]);
	}

	if (configuration.gameMode.goa.fasterPresents === Toggle.ON) {
		patches.push(fasterPresents[file]);
	}

	if (configuration.gameMode.goa.earlyLionDash === Toggle.ON) {
		patches.push(earlyLionDash[file]);
	}

	if (configuration.gameMode.goa.fastHyenasTwo === Toggle.ON) {
		patches.push(fastHyenasTwo[file]);
	}

	if (configuration.gameMode.goa.skipDragon === Toggle.ON) {
		patches.push(skipDragon[file]);
	}

	if (configuration.settings.leveling === Leveling.LEVEL_ONE) {
		patches.push(levelOneEXP[file]);
	}

	if (configuration.settings.leveling === Leveling.LEVEL_FIFTY) {
		patches.push(removeLevel99Abilities[file]);
	}

	if (
		(file === File.pnach &&
			configuration.include.growthAbilities !== RandomizingAction.VANILLA) ||
		(file === File.lua &&
			configuration.include.growthAbilities === RandomizingAction.VANILLA)
	) {
		patches.push(removeGrowthAbilities[file]);
	}

	if (configuration.include.maxGrowthAbilities === Toggle.ON) {
		patches.push(removeMaxGrowthAbilities[file]);
	}

	if (configuration.settings.keybladeStats === RandomizingAction.VANILLA) {
		patches.push(formKeybladesStats[file]);
	}

	if (configuration.include.keybladeAbilities === RandomizingAction.VANILLA) {
		patches.push(formKeybladesAbilities[file]);
	}

	if (configuration.settings.expMultiplier !== Multiplier.ONE) {
		patches.push(...expMultiplier(configuration, file));
	}

	patches.push(formEXPPatch(configuration, file));

	patches.push(inGameSettings(configuration, file));

	patches.push(...partyMemberActionAbilities(seed, file));

	if (file === File.lua) {
		patches.push(partyMemberWeapons[file]);
	}

	patches.push(
		file === File.pnach ? "// Random rewards" : "\n\t--Random rewards\n"
	);

	return seed.reduce((result, item, index, array) => {
		return (
			result +
			createLine(item.location.value, item.reward.value, file) +
			(file === File.lua && index === array.length - 1 ? "end" : "")
		);
	}, patches.join("\n"));
};
