import { shuffle } from "../helpers/shuffle";
import { Configuration } from "../types/configuration/Configuration";
import { RewardLocation } from "../types/RewardLocation";
import { SeedItem } from "../types/Seed";
import { assign } from "./assign";

export function* randomizePool(
	locations: RewardLocation[],
	configuration: Configuration
): IterableIterator<SeedItem> {
	const rewards = [
		...shuffle(
			locations.map(location => location.reward),
			configuration.name
		),
	];

	yield* assign(rewards, locations, configuration, true);
}
