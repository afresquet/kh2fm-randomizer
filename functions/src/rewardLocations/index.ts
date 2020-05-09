import { RewardLocation } from "../RewardLocation";
import { donaldRewardLocations } from "./Donald";
import { goofyRewardLocations } from "./Goofy";

export const rewardLocations: RewardLocation[] = [
	...goofyRewardLocations,
	...donaldRewardLocations,
];
