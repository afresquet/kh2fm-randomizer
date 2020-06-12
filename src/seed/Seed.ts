import { RewardLocation } from "../rewardLocations/RewardLocation";
import { Reward } from "../rewards/Reward";

export type SeedItem = {
	location: RewardLocation;
	reward: Reward;
};

export type Seed = SeedItem[];
