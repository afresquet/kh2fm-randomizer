import { Reward, RewardType } from "./Reward";

export enum RewardLocationType {
	POPUP = "popup",
	CHEST = "chest",
	BIGCHEST = "big chest",
	LEVELUP = "level up",
	BONUS = "bonus",
	GOOFY = "goofy bonus",
	DONALD = "donald bonus",
	form = "form level up",
	CRITICAL = "critical extra",
}

export interface RewardLocation {
	type: RewardLocationType;
	description: string;
	value: string;
	reward: Reward;
	exclude?: RewardType[];
}
