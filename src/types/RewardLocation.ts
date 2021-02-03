import { GameMode } from "./configuration/enums";
import { LocationName } from "./LocationName";
import { Reward, RewardType } from "./Reward";

export enum RewardLocationType {
	POPUP = "Popup",
	CHEST = "Chest",
	BIGCHEST = "Big Chest",
	LEVELUP = "Level Up",
	BONUS = "Bonus",
	KEYBLADE = "Keyblade",
	GOOFY = "Goofy Bonus",
	SHIELD = "Shield",
	DONALD = "Donald Bonus",
	STAFF = "Staff",
	FORM = "Form Level Up",
	CRITICAL = "Critical Extra",
}

export interface LocationDependency {
	candidate: Reward;
	name: string;
	address: string;
	conflict: Reward[];
}

export interface RewardLocation {
	type: RewardLocationType;
	location: LocationName;
	description: string;
	value: string;
	reward: Reward;
	secondVisit?: boolean;
	gameMode?: {
		[K in GameMode]?: {
			world?: LocationName;
			include?: Reward[];
			includeType?: RewardType[];
			exclude?: Reward[];
			excludeType?: RewardType[];
			dependencies?: LocationDependency[];
		};
	};
}
