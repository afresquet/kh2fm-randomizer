import seedrandom from "seedrandom";
import { keybladeAbilitiesRewardLocations } from "../rewardLocations/keyblades";
import { levels } from "../rewardLocations/levels";
import {
	RewardLocationName,
	RewardLocationType,
} from "../rewardLocations/RewardLocation";
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
				name: RewardLocationName.LEVEL_UP,
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

const randomStat = (
	configuration: Configuration,
	modifier: string
): { value: number; hex: string } => {
	const seeder = seedrandom(configuration.name + modifier);
	const positive = seeder() > 1 / 3 ? 1 : -1;
	const multiplier =
		configuration.experimental.keybladeStats === RandomizingAction.REPLACE
			? 1
			: positive;
	const value = Math.floor(seeder() * 11) * multiplier;

	return { value, hex: value.toString(16).toUpperCase().padStart(2, "0") };
};

export function* keybladeStats(
	configuration: Configuration
): IterableIterator<SeedItem> {
	for (const keyblade of keybladeAbilitiesRewardLocations) {
		const strength = randomStat(
			configuration,
			keyblade.values.stats + "strength"
		);

		const magic = randomStat(configuration, keyblade.values.stats + "magic");

		yield {
			location: {
				type: keyblade.type,
				name: keyblade.name,
				description: `${keyblade.description} (Stats)`,
				value: keyblade.values.stats,
				reward: {} as any,
			},
			reward: {
				type: "Stats" as any,
				name: `STR${strength.value} MAG${magic.value}`,
				value: `0000${magic.hex}${strength.hex}`,
			},
		};
	}
}
