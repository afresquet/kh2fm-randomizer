import { Reward } from "./Reward";
import { RewardLocation } from "./RewardLocation";

export type SeedItem = {
	location: RewardLocation;
	reward: Reward;
};

export type Seed = SeedItem[];
