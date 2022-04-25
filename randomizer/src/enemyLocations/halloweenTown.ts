import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const halloweenTownEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.HALLOWEEN_TOWN,
		description: "Halloween Town Square Heartless",
		world: "0E",
		room: "00",
		event: "33",
		enemies: [
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A528",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A568",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A5A8",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A5E8",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A628",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A668",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A6A8",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A6E8",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A728",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A768",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4A7A8",
			},
			{
				enemy: Enemies.SHADOW_HT,
				value: "11C4A7E8",
			},
			{
				enemy: Enemies.SOLDIER_HT,
				value: "11C4A828",
			},
			{
				enemy: Enemies.SHADOW_HT,
				value: "11C4A868",
			},
			{
				enemy: Enemies.SHADOW_HT,
				value: "11C4A8A8",
			},
			{
				enemy: Enemies.SHADOW_HT,
				value: "11C4A8E8",
			},
			{
				enemy: Enemies.SHADOW_HT,
				value: "11C4A928",
			},
			{
				enemy: Enemies.SOLDIER_HT,
				value: "11C4A968",
			},
			{
				enemy: Enemies.SHADOW_HT,
				value: "11C4A9A8",
			},
			{
				enemy: Enemies.SHADOW_HT,
				value: "11C4A9E8",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.HALLOWEEN_TOWN,
		description: "Candy Cane Lane Heartless",
		world: "0E",
		room: "06",
		event: "35",
		enemies: [
			{
				enemy: Enemies.DRILLER_MOLE_HT,
				value: "11C4F634",
			},
			{
				enemy: Enemies.DRILLER_MOLE_HT,
				value: "11C4F674",
			},
			{
				enemy: Enemies.TOY_SOLDIER_HT,
				value: "11C4F6B4",
			},
			{
				enemy: Enemies.DRILLER_MOLE_HT,
				value: "11C4F6F4",
			},
			{
				enemy: Enemies.TOY_SOLDIER_HT,
				value: "11C4F734",
			},
			{
				enemy: Enemies.TOY_SOLDIER_HT,
				value: "11C4F774",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.HALLOWEEN_TOWN,
		description: "Prison Keeper Boss Fight",
		world: "0E",
		room: "03",
		event: "34",
		enemies: [
			{
				enemy: Enemies.PRISON_KEEPER,
				value: "11C55570",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.HALLOWEEN_TOWN,
	// 	description: "Oogie Boogie Boss Fight",
	// 	value: "11C4C204",
	// 	enemy: Enemies.???,
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.HALLOWEEN_TOWN,
	// 	description: "LSB",
	// 	enemies: [
	// 		{
	// 			enemy: Enemies.LOCK,
	// 			value: "11C57570",
	// 		},
	// 		{
	// 			enemy: Enemies.SHOCK,
	// 			value: "11C575B0",
	// 		},
	// 		{
	// 			enemy: Enemies.BARREL,
	// 			value: "11C575F0",
	// 		},
	// 	],
	// },
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.HALLOWEEN_TOWN,
		description: "Present Collecting Fight",
		world: "0E",
		room: "00",
		event: "3C",
		enemies: [
			// {
			// 	enemy: Enemies.WIGHT_KNIGHT_HT,
			// 	value: "11C4ABB8",
			// },
			// {
			// 	enemy: Enemies.WIGHT_KNIGHT_HT,
			// 	value: "11C4ABF8",
			// },
			// {
			// 	enemy: Enemies.WIGHT_KNIGHT_HT,
			// 	value: "11C4AC38",
			// },
			// {
			// 	enemy: Enemies.WIGHT_KNIGHT_HT,
			// 	value: "11C4AC78",
			// },
			{
				enemy: Enemies.GRAVEYARD_HT,
				value: "11C4ACB8",
			},
			{
				enemy: Enemies.GRAVEYARD_HT,
				value: "11C4ACF8",
			},
			{
				enemy: Enemies.WIGHT_KNIGHT_HT,
				value: "11C4AD38",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.HALLOWEEN_TOWN,
		description: "Experiment Boss Fight",
		world: "0E",
		room: "07",
		event: "40",
		enemies: [
			{
				enemy: Enemies.THE_EXPERIMENT,
				value: "11C56120",
			},
		],
	},
];
