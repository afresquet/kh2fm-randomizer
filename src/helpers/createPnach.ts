import { Enemy } from "../enemies/Enemy";
import { bosses, enemies, enemiesMap } from "../enemyLocations";
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
import { createJoker } from "./createJoker";
import { shuffle } from "./shuffle";
import { placeBosses } from "../seed/placeBosses";

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

		if (configuration.experimental.enemies === Toggle.ON || true) {
			for (const location of enemies) {
				const one = `patch=1,EE,E0${(location.enemies.length + 3)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}${location.room}${location.world},extended,0032BAE0\n`;
				const two = `patch=1,EE,E0${(location.enemies.length + 2)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${location.event},extended,0032BAE4\n`;
				const three = `patch=1,EE,E0${(location.enemies.length + 1)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${location.event},extended,0032BAE6\n`;
				const four = `patch=1,EE,E0${location.enemies.length
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${location.event},extended,0032BAE8\n`;

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

		if (configuration.experimental.bosses === Toggle.ON ||true) {
			const shuffledBosses = [
				...shuffle(
					bosses
						.map(location => {
							return location.enemies.map(enemy  => {
								enemy.world = location.world
								enemy.room = location.room
								enemy.event = location.event
								return enemy
							})
						})
						.reduce((prev, curr) => prev.concat(curr)),
					configuration.name
				),
			];


			
			const availableLocations = shuffledBosses.map(newboss => {
				return {
					boss: newboss,
					available: [...shuffle(shuffledBosses.filter(oldboss => {
						if (!newboss.enemy.rules)
							return true
						if (!newboss.enemy.rules.bannedFrom)
							return true
						return !newboss.enemy.rules.bannedFrom.includes(oldboss.enemy.name)
					}), configuration.name)]
				}
			})

			// const starttime = (new Date()).getUTCMilliseconds()

			var replacementMapping: any = placeBosses(availableLocations, shuffledBosses);

			// console.log( ( ((new Date()).getUTCMilliseconds()) - starttime) / 1000 )
			// console.log(replacementMapping)



			// apply volcano/blizzard lord replacements first, as they are the only room currently randomized with 2+ bosses
			var agrabahbosses = replacementMapping.filter((rep: any) => rep.old.world == "07" &&
																 rep.old.room == "03" &&
																 rep.old.event == "3B")
			var comment = "// "
			var codes = []

			for (var index = 0; index < agrabahbosses.length; index++) {
				const replacement = agrabahbosses[index]
				const oldenemy = replacement.old
				const newenemy = replacement.new
				comment += `${newenemy.enemy.name} (was ${oldenemy.enemy.name}), `
				if (oldenemy != newenemy) {
					var newValue = newenemy.enemy.value

					if (newenemy.enemy.rules) {
						if (newenemy.enemy.rules.useWhenReplacing) {
							newValue = newenemy.enemy.rules.useWhenReplacing
						}
					}
					const modifierAddress  = (parseInt(oldenemy.value, 16) + 32).toString(16);
					const modifier =
						newValue.length === 6 ? newValue.substring(0, 2) : "";
					codes.push(createLine(oldenemy.value, newValue, false))
					codes.push(createLine(modifierAddress, modifier, false))
					const sourcePatches = oldenemy.patches
					if (sourcePatches) {
						if (sourcePatches.all) {
							for (const patch of sourcePatches.all) {
								// code += "\n //" + patch.name + "\n"/
								for (const line of patch.codes) {
									codes.push(createLine(line.split(" ")[0], line.split(" ")[1], false))
								}
							}
						}
					}
				}
			}
			content = comment + "\n" + createJoker(codes, "07", "03", "3B").join("\n") + "\n"
			patches.push(content)

			replacementMapping = replacementMapping.filter((rep: any) => !(rep.old.world == "07" &&
																		   rep.old.room == "03" &&
																		   rep.old.event == "3B"))

			for (var index = 0; index < replacementMapping.length; index++) {
				const replacement = replacementMapping[index]
				const oldenemy = replacement.old
				const newenemy = replacement.new
				var content
				if (oldenemy == newenemy) {
					// Waste of resources to apply any codes when it's a right replacement
					// Add comment to record what happened though
					content = ` // ${newenemy.enemy.name} (was ${oldenemy.enemy.name})\n`
				} else {
					var newValue = newenemy.enemy.value

					if (newenemy.enemy.rules) {
						if (newenemy.enemy.rules.useWhenReplacing) {
							newValue = newenemy.enemy.rules.useWhenReplacing
						}
					}
					const modifierAddress  = (parseInt(oldenemy.value, 16) + 32).toString(16);
					const modifier =
						newValue.length === 6 ? newValue.substring(0, 2) : "";
					
					var code = 
						createLine(oldenemy.value, newValue, false) +
						` // ${newenemy.enemy.name} (was ${oldenemy.enemy.name})\n` +
						createLine(modifierAddress, modifier)
					const sourcePatches = oldenemy.patches
					if (sourcePatches) {
						if (sourcePatches.all) {
							for (const patch of sourcePatches.all) {
								// code += "\n //" + patch.name + "\n"/
								for (const line of patch.codes) {
									code += createLine(line.split(" ")[0], line.split(" ")[1])
								}
							}
						}
					}
					var splitCode: string[] = code.split("\n");
					splitCode.pop()

					content = createJoker(splitCode, oldenemy.world, oldenemy.room, oldenemy.event).join("\n") + "\n";
				}
				patches.push(content)
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
