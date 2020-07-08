import { Enemy } from "../enemies/Enemy";
import { LocationName } from "../LocationName";
import { GameMode } from "../settings/enums";

export interface RewardLocation {
	location: LocationName;
	description: string;
	value: string;
	enemy: Enemy;
	gameMode?: {
		[K in GameMode]?: {};
	};
}
