import { Reward, RewardType } from "../rewards/Reward";
import { GameMode } from "../settings/enums";

export enum RewardLocationType {
	POPUP = "Popup",
	CHEST = "Chest",
	BIGCHEST = "Big Chest",
	LEVELUP = "Level Up",
	BONUS = "Bonus",
	GOOFY = "Goofy Bonus",
	DONALD = "Donald Bonus",
	FORM = "Form Level Up",
	CRITICAL = "Critical Extra",
}

export enum RewardLocationName {
	AGRABAH = "Agrabah",
	ATLANTICA = "Atlantica",
	BEASTS_CASTLE = "Beast's Castle",
	CAVERN_OF_REMEMBRANCE = "Cavern of Remembrance",
	CRITICAL = "Critical Extra",
	DISNEY_CASTLE = "Disney Castle",
	DONALD = "Donald",
	FORM = "Form",
	GOOFY = "Goofy",
	HALLOWEEN_TOWN = "Halloween Town",
	HOLLOW_BASTION = "Hollow Bastion",
	LAND_OF_DRAGONS = "Land of Dragons",
	LEVEL_UP = "Level Up",
	OLYMPUS = "Olympus Colisseum",
	OLYMPUS_CUPS = "Olympus Colisseum (Cups)",
	ABSENT_SILHOUETTE = "Absent Silhouette",
	DATA_ORGANIZATION_XIII = "Data Organization XIII",
	POOH = "100 Acre Wood",
	PORT_ROYAL = "Port Royal",
	PRIDE_LANDS = "Pride Lands",
	SIMULATED_TWILIGHT_TOWN = "Simulated Twilight Town",
	SPACE_PARANOIDS = "Space Paranoids",
	TIMELESS_RIVER = "Timeless River",
	TWILIGHT_TOWN = "Twilight Town",
	TWTNW = "The World That Never Was",
}

export interface RewardLocation {
	type: RewardLocationType;
	name: RewardLocationName;
	description: string;
	value: string;
	reward: Reward;
	gameMode?: {
		[K in GameMode]?: {
			include?: Reward[];
			includeType?: RewardType[];
			exclude?: Reward[];
			excludeType?: RewardType[];
		};
	};
}
