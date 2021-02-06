import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const prideLandsEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Elephant Graveyard Heartless",
		world: "0A",
		room: "05",
		event: "38",
		enemies: [
			{
				enemy: Enemies.LIVING_BONE,
				value: "11C4EC14",
			},
			{
				enemy: Enemies.LIVING_BONE,
				value: "11C4EC54",
			},
		],
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
		world: "0A",
		room: "02",
		event: "33",
		enemies: [
			// {
			// 	enemy: Enemies.SHENZI,
			// 	value: "11C54C44",
			// },
			// {
			// 	enemy: Enemies.BANZAI,
			// 	value: "11C54C04",
			// },
			// {
			// 	enemy: Enemies.ED,
			// 	value: "11C54BC4",
			// },
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Scar Boss Fight",
		world: "0A",
		room: "0E",
		event: "37",
		enemies: [
			{
				enemy: Enemies.SCAR,
				value: "11C5A74C",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PRIDE_LANDS,
		description: "Hyenas II",
		world: "0A",
		room: "05",
		event: "39",
		enemies: [
			// {
			// 	enemy: Enemies.SHENZI,
			// 	value: "11C4EDB4",
			// },
			// {
			// 	enemy: Enemies.BANZAI,
			// 	value: "11C4EE34",
			// },
			// {
			// 	enemy: Enemies.ED,
			// 	value: "11C4EDF4",
			// },
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.PRIDE_LANDS,
	// 	description: "Groundshaker Boss Fight",
	// 	value: "11C59F80",
	// 	enemy: Enemies.???,
	// },
];
