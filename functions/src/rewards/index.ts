import { Reward } from "../Reward";
import { bonusRewards } from "./bonus";
import { donaldRewards } from "./Donald";
import { goofyRewards } from "./Goofy";

export const rewardLocations: Reward[] = [
	...bonusRewards,
	...goofyRewards,
	...donaldRewards,
];
