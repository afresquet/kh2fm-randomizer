import { Enemy, EnemyType } from "../enemies/Enemy";
import { bosses, enemies, enemiesMap } from "../enemyLocations";
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
import { Leveling, RandomizingAction, Toggle } from "../settings/enums";
import { createLine } from "./createLine";
import { shuffle } from "./shuffle";

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

		if (configuration.experimental.bosses === Toggle.ON) {
			const shuffledBosses = [
				...shuffle(
					bosses
						.map(location => location.enemies)
						.reduce((prev, curr) => prev.concat(curr)),
					configuration.name
				),
			];

			for (const location of bosses) {
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

				const content = location.enemies.reduce((prev, curr) => {
					let enemy: Enemy;

					if (curr.enemy.type === EnemyType.BOSS) {
						enemy = shuffledBosses.shift()!.enemy;
					} else {
						enemy = enemySeed.get(curr.enemy.value)!;
					}

					return (
						prev +
						createLine(curr.value, enemy.value, false) +
						` // ${enemy.name}\n`
					);
				}, one + two + three + four);

				patches.push(content);
			}
		}
	}

	return seed.reduce((result, item) => {
		return result + createLine(item.location.value, item.reward.value);
	}, patches.join("\n"));
};
