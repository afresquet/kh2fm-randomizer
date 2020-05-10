import seedrandom from "seedrandom";
import { Configuration } from "../Configuration";
import { createLine } from "../helpers/createLine";
import { rewardLocations } from "../rewardLocations";
import { Reward } from "../rewards/Reward";

export const randomizeLocations = (
	{ seed }: Configuration,
	rewards: Reward[]
) => {
	return rewardLocations
		.map(location => {
			const seeder = seedrandom(seed + rewards.length.toString());
			const randomIndex = Math.floor(seeder() * rewards.length);
			const reward = rewards.splice(randomIndex, 1)[0];

			return { location, reward };
		})
		.reduce((result, random) => {
			return result + createLine(random.location.value, random.reward.value);
		}, "");
};
