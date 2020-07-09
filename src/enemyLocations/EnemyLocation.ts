import { Enemy } from "../enemies/Enemy";
import { LocationName } from "../LocationName";
import { GameMode } from "../settings/enums";

export enum EnemyLocationType {
	MOB_FIGHT = "Mob Fight",
	BOSS_FIGHT = "Boss Fight",
	MISCELLANEOUS = "Miscellaneous",
}

export interface EnemyLocation {
	type: EnemyLocationType;
	location: LocationName;
	description: string;
	world: string;
	room: string;
	event: string;
	enemies: {
		enemy: Enemy;
		value: string;
	}[];
	gameMode?: {
		[K in GameMode]?: {};
	};
}
