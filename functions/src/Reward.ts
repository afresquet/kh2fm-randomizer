import { RewardType } from "./RewardType";

export interface Reward {
	name: string;
	value: string;
	priority: number;
	type: RewardType;
}
