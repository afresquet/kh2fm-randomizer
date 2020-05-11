import { Configuration } from "../Configuration";
import { levels } from "../levels";
import { LevelStats } from "../LevelStats";
import { RewardLocationType } from "../rewardLocations/RewardLocation";
import { Seed } from "./createSeed";

export function* seedStats(
	configuration: Configuration
): IterableIterator<Seed> {
	const levelStats = new LevelStats();

	for (const level of levels) {
		levelStats.levelUp(configuration.seed);

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				description: `LV${level.level} (Stats)`,
				value: level.stats,
				reward: {} as any,
			},
			reward: {
				type: "stats" as any,
				name: `AP${levelStats.ability} DEF${levelStats.defense} MAG${levelStats.magic} STR${levelStats.strength}`,
				value: levelStats.hexCode,
			},
		};
	}
}
