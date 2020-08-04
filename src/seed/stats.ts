import { shuffle } from "../helpers/shuffle";
import { LocationName } from "../LocationName";
import { keybladeRewardLocations } from "../rewardLocations/keyblades";
import { levels } from "../rewardLocations/levels";
import { RewardLocationType } from "../rewardLocations/RewardLocation";
import { Configuration } from "../settings/Configuration";
import { RandomizingAction } from "../settings/enums";
import { LevelStats } from "./LevelStats";
import { SeedItem } from "./Seed";

export function* stats(
	configuration: Configuration
): IterableIterator<SeedItem> {
	const levelStats = new LevelStats();

	for (const level of levels) {
		levelStats.levelUp(configuration.name, level.doubleIncrease);

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				location: LocationName.LEVEL_UP,
				description: `LV${level.level} (Stats)`,
				value: level.stats,
				reward: {} as any,
			},
			reward: {
				type: "Stats" as any,
				name: `AP${levelStats.ability} DEF${levelStats.defense} MAG${levelStats.magic} STR${levelStats.strength}`,
				value: levelStats.hexCode,
			},
		};
	}
}

const statsPool = keybladeRewardLocations.reduce<number[]>(
	(prev, curr) => prev.concat(curr.stats),
	[]
);

export function* keybladeStats(
	configuration: Configuration
): IterableIterator<SeedItem> {
	const shuffled = [...shuffle(statsPool, configuration.name)].map(stat =>
		configuration.settings.keybladeStats === RandomizingAction.REPLACE
			? stat
			: stat + Math.max(1, Math.floor(stat * 0.5))
	);

	for (const keyblade of keybladeRewardLocations) {
		const strength = shuffled.pop()!;
		const strengthHEX = strength.toString(16).toUpperCase().padStart(2, "0");

		const magic = shuffled.pop()!;
		const magicHEX = magic.toString(16).toUpperCase().padStart(2, "0");

		yield {
			location: {
				type: keyblade.type,
				location: keyblade.type as any,
				description: `${keyblade.description} (Stats)`,
				value: keyblade.values.stats,
				reward: {} as any,
			},
			reward: {
				type: "Stats" as any,
				name: `STR${strength} MAG${magic}`,
				value: `0000${magicHEX}${strengthHEX}`,
			},
		};
	}
}
