import { Enemies } from "../enemies";
import { LocationName } from "../LocationName";
import { EnemyLocation, EnemyLocationType } from "./EnemyLocation";

export const prideLandsEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Elephant Graveyard Heartless",
		value: "11C4EC14",
		enemy: Enemies.LIVING_BONE,
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Elephant Graveyard Heartless",
		value: "11C4EC54",
		enemy: Enemies.LIVING_BONE,
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.PRIDE_LANDS,
	// 	description: "Hyenas Fight I",
	// 	value: "11C54C84",
	// 	enemy: Enemies.???,
	// 	// | Pumba |
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Hyenas Fight I",
		value: "11C54C44",
		enemy: Enemies.SHENZI,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Hyenas Fight I",
		value: "11C54C04",
		enemy: Enemies.BANZAI,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Hyenas Fight I",
		value: "11C54BC4",
		enemy: Enemies.ED,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Scar Boss Fight",
		value: "11C5A74C",
		enemy: Enemies.SCAR,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Hyenas II",
		value: "11C4EDB4",
		enemy: Enemies.SHENZI,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Hyenas II",
		value: "11C4EE34",
		enemy: Enemies.BANZAI,
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Hyenas II",
		value: "11C4EDF4",
		enemy: Enemies.ED,
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.PRIDE_LANDS,
	// 	description: "Groundshaker Boss Fight",
	// 	value: "11C59F80",
	// 	enemy: Enemies.???,
	// },
];
