import { LocationName } from "../LocationName";
import { levels } from "../rewardLocations/levels";
import { RewardLocationType } from "../rewardLocations/RewardLocation";
import { Configuration } from "../settings/Configuration";
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
