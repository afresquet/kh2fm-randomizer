import { RewardLocation } from "../RewardLocation";
import { bonusRewardLocations } from "./bonus";
import { criticalRewardLocations } from "./critical";
import { donaldRewardLocations } from "./Donald";
import { formRewardLocations } from "./form";
import { goofyRewardLocations } from "./Goofy";

export const rewardLocations: RewardLocation[] = [
	...bonusRewardLocations,
	...goofyRewardLocations,
	...donaldRewardLocations,
	...formRewardLocations,
	...criticalRewardLocations,
];
