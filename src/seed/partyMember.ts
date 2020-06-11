import { shuffle } from "../helpers/shuffle";
import { donaldRewardLocations } from "../rewardLocations/donald";
import { goofyRewardLocations } from "../rewardLocations/goofy";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { Configuration } from "../settings/Configuration";
import { SeedItem } from "./Seed";

export function* partyMember(
	partyMember: "Donald" | "Goofy",
	configuration: Configuration
): IterableIterator<SeedItem> {
	let locations: RewardLocation[] = [];

	if (partyMember === "Donald") {
		locations = donaldRewardLocations;
	} else if (partyMember === "Goofy") {
		locations = goofyRewardLocations;
	}

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
