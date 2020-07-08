import { Enemies } from "../enemies";
import { LocationName } from "../LocationName";
import { EnemyLocation, EnemyLocationType } from "./EnemyLocation";

export const absentSilhouettesEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Vexen AS Fight",
		value: "11C597A0",
		enemy: Enemies.VEXEN_AS,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Lexaeus AS Fight",
		value: "11C56368",
		enemy: Enemies.LEXAEUS_AS,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Zexion AS Fight",
		value: "11C597E0",
		enemy: Enemies.ZEXION_AS,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Marluxia AS Fight",
		value: "11C58FE0",
		enemy: Enemies.MARLUXIA_AS,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Larxene AS Fight",
		value: "11C5649C",
		enemy: Enemies.LARXENE_AS,
	},
];
