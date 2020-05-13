import { criticalRewardLocations } from "../rewardLocations/critical";
import { Rewards } from "../rewards";
import { Seed } from "./createSeed";

export function* seedLevelOne(): IterableIterator<Seed> {
	for (const location of criticalRewardLocations) {
		if (location.reward === Rewards.LUCKY_LUCKY) {
			if (location.value === "11D18DE4") {
				yield {
					location,
					reward: Rewards.SCAN,
				};
			} else if (location.value === "11D18DE6") {
				yield {
					location,
					reward: Rewards.GUARD,
				};
			}

			continue;
		}

		yield {
			location,
			reward: location.reward,
		};
	}
}
