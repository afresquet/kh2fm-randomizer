import { shuffle } from "../helpers/shuffle";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { Configuration } from "../settings/Configuration";
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

	for (const location of locations) {
		yield {
			location,
			reward: rewards.shift()!,
		};
	}
}
