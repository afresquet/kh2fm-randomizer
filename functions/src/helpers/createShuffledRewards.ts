import seedrandom from "seedrandom";
import { Configuration } from "../Configuration";
import { rewards as originalRewards } from "../rewards";
import { criticalRewards } from "../rewards/critical";
import { donaldRewards } from "../rewards/donald";
import { goofyRewards } from "../rewards/goofy";
import { Reward } from "../rewards/Reward";

export const createShuffledRewards = (
	configuration: Configuration
): Reward[] => {
	const rewards = originalRewards.slice();

	// Critical Mode
	if (configuration.criticalMode) {
		rewards.push(...criticalRewards);
	}

	// Donald
	if (configuration.donaldAbilities) {
		rewards.push(...donaldRewards);
	}

	// Goofy
	if (configuration.goofyAbilities) {
		rewards.push(...goofyRewards);
	}

	const result: Reward[] = [];

	for (let i = 0; i < originalRewards.length; i++) {
		const seeder = seedrandom(configuration.seed + i.toString());
		const index = Math.floor(seeder() * rewards.length);

		const reward = rewards.splice(index, 1)[0];

		result.push(reward);
	}

	return result;
};
