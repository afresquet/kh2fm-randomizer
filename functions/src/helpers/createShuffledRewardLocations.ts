import seedrandom from "seedrandom";
import { Configuration } from "../Configuration";
import { bonusRewardLocations } from "../rewardLocations/bonus";
import { criticalRewardLocations } from "../rewardLocations/critical";
import { donaldRewardLocations } from "../rewardLocations/donald";
import { formRewardLocations } from "../rewardLocations/form";
import { goofyRewardLocations } from "../rewardLocations/goofy";
import { popupRewardLocations } from "../rewardLocations/popup";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { worldRewardLocations } from "../rewardLocations/worlds";

export const createShuffledRewardLocations = (
	configuration: Configuration
): RewardLocation[] => {
	const rewardLocations: RewardLocation[] = [
		...popupRewardLocations,
		...bonusRewardLocations,
		...formRewardLocations,
		...worldRewardLocations,
	];

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

	const length = rewardLocations.length;
	for (let i = 0; i < length; i++) {
		const seeder = seedrandom(configuration.seed + i.toString());
		const index = Math.floor(seeder() * rewardLocations.length);

		const rewardLocation = rewardLocations.splice(index, 1)[0];

		result.push(rewardLocation);
	}

	return result;
};
