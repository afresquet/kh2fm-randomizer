import { Configuration } from "../Configuration";
import { donaldRewardLocations } from "../rewardLocations/donald";
import { goofyRewardLocations } from "../rewardLocations/goofy";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { Seed } from "./createSeed";
import { shuffle } from "./shuffle";

export function* seedPartyMember(
	partyMember: "Donald" | "Goofy",
	configuration: Configuration
): IterableIterator<Seed> {
	let locations: RewardLocation[] = [];

	if (partyMember === "Donald") {
		locations = donaldRewardLocations;
	} else if (partyMember === "Goofy") {
		locations = goofyRewardLocations;
	}

	const rewards = shuffle(
		locations.map(location => location.reward),
		configuration.seed
	);

	for (const location of locations) {
		yield {
			location,
			reward: rewards.shift()!,
		};
	}
}
