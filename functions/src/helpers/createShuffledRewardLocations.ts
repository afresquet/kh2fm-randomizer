import seedrandom from "seedrandom";
import { Configuration } from "../Configuration";
import { rewardLocations as originalRewardLocations } from "../rewardLocations";
import { criticalRewardLocations } from "../rewardLocations/critical";
import { donaldRewardLocations } from "../rewardLocations/donald";
import { goofyRewardLocations } from "../rewardLocations/goofy";
import { RewardLocation } from "../rewardLocations/RewardLocation";

export const createShuffledRewardLocations = (
	configuration: Configuration
): RewardLocation[] => {
	const rewardLocations = originalRewardLocations.slice();

	// Critical Mode
	if (configuration.criticalMode) {
		rewardLocations.push(...criticalRewardLocations);
	}

	// Donald
	if (configuration.donaldAbilities) {
		rewardLocations.push(...donaldRewardLocations);
	}

	// Goofy
	if (configuration.goofyAbilities) {
		rewardLocations.push(...goofyRewardLocations);
	}

	const result: RewardLocation[] = [];

	for (let i = 0; i < originalRewardLocations.length; i++) {
		const seeder = seedrandom(configuration.seed + i.toString());
		const index = Math.floor(seeder() * rewardLocations.length);

		const rewardLocation = rewardLocations.splice(index, 1)[0];

		result.push(rewardLocation);
	}

	return result;
};
