import { RewardType } from "./RewardType";

export interface Reward {
	type: RewardType;
	name: string;
	value: string;
	priority?: number;
}
