import seedrandom from "seedrandom";
import { Configuration } from "../Configuration";
import { bonusRewards } from "../rewards/bonus";
import { criticalRewards } from "../rewards/critical";
import { donaldRewards } from "../rewards/donald";
import { formRewards } from "../rewards/form";
import { goofyRewards } from "../rewards/goofy";
import { levelupRewards } from "../rewards/levelup";
import { popupRewards } from "../rewards/popup";
import { Reward } from "../rewards/Reward";
import { worldRewards } from "../rewards/worlds";

export const createShuffledRewards = (
	configuration: Configuration
): Reward[] => {
	const rewards = [
		...popupRewards,
		...levelupRewards,
		...bonusRewards,
		...formRewards,
		...worldRewards,
	];

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

	const length = rewards.length;
	for (let i = 0; i < length; i++) {
		const seeder = seedrandom(configuration.seed + i.toString());
		const index = Math.floor(seeder() * rewards.length);

		const reward = rewards.splice(index, 1)[0];

		result.push(reward);
	}

	return result;
};
