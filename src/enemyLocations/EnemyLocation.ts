import { Enemy } from "../enemies/Enemy";
import { LocationName } from "../LocationName";
import { GameMode } from "../settings/enums";

export enum EnemyLocationType {
	MOB_FIGHT = "Mob Fight",
	BOSS_FIGHT = "Boss Fight",
}

export interface EnemyLocation {
	type: EnemyLocationType;
	location: LocationName;
	description: string;
	value: string;
	enemy: Enemy;
	gameMode?: {
		[K in GameMode]?: {};
	};
}
