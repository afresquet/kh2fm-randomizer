import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";

export enum RewardLocationType {
	POPUP = "Popup",
	CHEST = "Chest",
	BIGCHEST = "Big Chest",
	LEVELUP = "Level Up",
	BONUS = "Bonus",
	GOOFY = "Goofy Bonus",
	DONALD = "Donald Bonus",
	form = "Form Level Up",
	CRITICAL = "Critical Extra",
}

export interface RewardLocation {
	type: RewardLocationType;
	description: string;
	value: string;
	reward: Reward;
	gameMode?: {
		[K in GameMode]?: {
			exclude?: Reward[];
			forceJunk?: boolean;
		};
	};
}
