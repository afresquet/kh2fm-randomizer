import { shuffle } from "../helpers/shuffle";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { Configuration } from "../settings/Configuration";
import { assign } from "./assign";
import { SeedItem } from "./Seed";

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
