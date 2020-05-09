import { Reward } from "../Reward";
import { bonusRewards } from "./bonus";
import { criticalRewards } from "./critical";
import { donaldRewards } from "./Donald";
import { goofyRewards } from "./Goofy";

export const rewardLocations: Reward[] = [
	...bonusRewards,
	...goofyRewards,
	...donaldRewards,
	...criticalRewards,
];
