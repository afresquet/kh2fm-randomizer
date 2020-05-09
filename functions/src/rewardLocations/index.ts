import { RewardLocation } from "../RewardLocation";
import { bonusRewardLocations } from "./bonus";
import { criticalRewardLocations } from "./critical";
import { donaldRewardLocations } from "./Donald";
import { goofyRewardLocations } from "./Goofy";

export const rewardLocations: RewardLocation[] = [
	...bonusRewardLocations,
	...goofyRewardLocations,
	...donaldRewardLocations,
	...criticalRewardLocations,
];
