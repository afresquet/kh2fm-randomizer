import { Enemy } from "../enemies/Enemy";
import { enemies, enemiesMap } from "../enemyLocations";
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
import { superbossRetry } from "../patches/superbossRetry";
import { Seed } from "../seed/Seed";
import { Configuration } from "../settings/Configuration";
import {
	Leveling,
	Multiplier,
	RandomizingAction,
	Toggle,
} from "../settings/enums";
import { createLine } from "./createLine";
import { patchEnemies } from "../seed/patchEnemies";
import { shuffle } from "./shuffle";
import { placeBosses } from "../seed/placeBosses";
import { spawnlimiter } from "src/patches/spawnlimiter";

export const createPnach = (seed: Seed, configuration: Configuration) => {
	const patches: string[] = [`// ${configuration.name}`];

	if (configuration.settings.criticalMode === Toggle.OFF) {
		patches.push(startingAP);
	}

	if (configuration.gameMode.goa.shorterDay5 === Toggle.ON) {
		patches.push(shorterDay5);
	}

	if (configuration.gameMode.goa.fasterOogie === Toggle.ON) {
		patches.push(fasterOogie);
	}

	if (configuration.gameMode.goa.fasterPresents === Toggle.ON) {
		patches.push(fasterPresents);
	}

	if (configuration.gameMode.goa.earlyLionDash === Toggle.ON) {
		patches.push(earlyLionDash);
	}

	if (configuration.gameMode.goa.fastHyenasTwo === Toggle.ON) {
		patches.push(fastHyenasTwo);
	}

	if (configuration.gameMode.goa.skipDragon === Toggle.ON) {
		patches.push(skipDragon);
	}

	if (configuration.settings.leveling === Leveling.LEVEL_ONE) {
		patches.push(levelOneEXP);
	}

	if (configuration.settings.leveling === Leveling.LEVEL_FIFTY) {
		patches.push(removeLevel99Abilities);
	}

	if (configuration.include.growthAbilities !== RandomizingAction.VANILLA) {
		patches.push(removeGrowthAbilities);
	}

	if (configuration.include.maxGrowthAbilities === Toggle.ON) {
		patches.push(removeMaxGrowthAbilities);
	}

	if (configuration.settings.keybladeStats === RandomizingAction.VANILLA) {
		patches.push(formKeybladesStats);
	}

	if (configuration.include.keybladeAbilities === RandomizingAction.VANILLA) {
		patches.push(formKeybladesAbilities);
	}

	if (configuration.settings.expMultiplier !== Multiplier.ONE) {
		patches.push(...expMultiplier(configuration));
	}

	patches.push(formEXPPatch(configuration));

	patches.push(inGameSettings(configuration));

	patches.push(...partyMemberActionAbilities(seed));

	if (
		configuration.experimental.enemies === Toggle.ON ||
		configuration.experimental.bosses === Toggle.ON
	) {
		const shuffledEnemies = [
			...shuffle<Enemy>([...enemiesMap.values()], configuration.name),
		];
		const enemySeed = new Map<string, Enemy>();
		for (const enemy of enemiesMap.values()) {
			enemySeed.set(enemy.value, shuffledEnemies.shift()!);
		}

		if (configuration.experimental.enemies === Toggle.ON) {
			// spawn limiter needs to be low so forced fights will spawn all the enemies
			patches.push(spawnlimiter);

			for (const location of enemies) {

				// Sometimes the conditionals need to reference multiple events (example: escort minnie I)
				var event1;
				var event2;
				var event3;
				if (location.eventGroup) {
					event1 = location.eventGroup[0]
					event2 = location.eventGroup[1]
					event3 = location.eventGroup[2]
				}
				else {
					event1 = location.event
					event2 = location.event
					event3 = location.event
				}

				const one = `patch=1,EE,E0${(location.enemies.length + 3)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}${location.room}${location.world},extended,0032BAE0 // ${location.description}\n`;
				const two = `patch=1,EE,E0${(location.enemies.length + 2)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${event1},extended,0032BAE4\n`;
				const three = `patch=1,EE,E0${(location.enemies.length + 1)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${event2},extended,0032BAE6\n`;
				const four = `patch=1,EE,E0${location.enemies.length
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${event3},extended,0032BAE8\n`;

				const content = location.enemies.reduce(
					(prev, curr) =>
						prev +
						createLine(
							curr.value,
							enemySeed.get(curr.enemy.value)!.value,
							false
						) +
						` // ${enemySeed.get(curr.enemy.value)!.name}\n`,
					one + two + three + four
				);

				patches.push(content);
			}
		}

		if (configuration.experimental.bosses === Toggle.ON) {


			// const starttime = (new Date()).getUTCMilliseconds()

			var replacementMapping: any = placeBosses(configuration.name);

			// console.log( ( ((new Date()).getUTCMilliseconds()) - starttime) / 1000 )
			// console.log(replacementMapping)


			if (replacementMapping) {
				// apply volcano/blizzard lord replacements first, as they are one of two rooms currently randomized with 2+ bosses
				var agrabahbosses = replacementMapping.filter((rep: any) => rep.old.world === "07" &&
																	rep.old.room === "03" &&
																	rep.old.event === "3B")

				patches.push(patchEnemies(agrabahbosses, "07", "03", "3B"))

				// apply leon/yuffie replacements second. 
				var leonyuffie = replacementMapping.filter((rep: any) => rep.old.world === "06" &&
																	rep.old.room === "BD" &&
																	rep.old.event === "0A")

				patches.push(patchEnemies(leonyuffie, "06", "BD", "0A"))
				
				//filter out the rooms with two replacements and replace the rest
				replacementMapping = replacementMapping.filter((rep: any) => !(rep.old.world === "07" &&
																			rep.old.room === "03" &&
																			rep.old.event === "3B"))

				replacementMapping = replacementMapping.filter((rep: any) => !(rep.old.world === "06" &&
																			rep.old.room === "BD" &&
																			rep.old.event === "0A"))

				for (var index = 0; index < replacementMapping.length; index++) {
					const replacement = replacementMapping[index]
					patches.push(patchEnemies([replacement], replacement.old.world, replacement.old.room, replacement.old.event))
				}
			}
		}
	}

	if (configuration.experimental.superbossRetry === Toggle.ON) {
		patches.push(superbossRetry);
	}

	return seed.reduce((result, item) => {
		return result + createLine(item.location.value, item.reward.value);
	}, patches.join("\n"));
};
