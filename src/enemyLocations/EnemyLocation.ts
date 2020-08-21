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
	patches?: {
		// patches which are applied to every boss that is placed here (ie marluxia's room)
		all: {
			name: string;
			codes: string[]
		}[]
	};
	gameMode?: {
		[K in GameMode]?: {};
	};
}
