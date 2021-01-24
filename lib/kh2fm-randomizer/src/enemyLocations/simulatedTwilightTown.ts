import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const simulatedTwilightTownEnemyLocations: EnemyLocation[] = [
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Seifer (Tutorial)",
	// 	value: "11C36D8C",
	// 	enemy: Enemies.SEIFER,
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Seifer (Day 1)",
		world: "02",
		room: "04",
		event: "4E",
		enemies: [
			// {
			// 	enemy: Enemies.SEIFER,
			// 	value: "11C36EC0",
			// },
		],
	},
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Dusk (1st Fight with Struggle Bat)",
	// 	world: "02",
	// 	room: "0E",
	// 	event: "7F",
	// 	enemies: [
	// 		{
	// 			enemy: Enemies.DUSK,
	// 			value: "11C443A4",
	// 		},
	// 	],
	// },
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Dusk (1st Fight with Keyblade)",
		world: "02",
		room: "0E",
		event: "80",
		enemies: [
			{
				enemy: Enemies.DUSK,
				value: "11C444D8",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Dusk (3rd Day; Sandlot)",
		world: "02",
		room: "04",
		event: "4F",
		enemies: [
			{
				enemy: Enemies.DUSK,
				value: "11C36FF4",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Station of Serenity Nobodies",
		world: "02",
		room: "20",
		event: "9A",
		enemies: [
			{
				enemy: Enemies.DUSK,
				value: "11C58C0C",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C58C4C",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C58C8C",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Twilight Thorn Boss Fight",
	// 	value: "11C59E24",
	// 	enemy: Enemies.TWILIGHT_THORN,
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Hayner (Struggle Tournament)",
	// 	value: "11C269AC",
	// 	enemy: Enemies.HAYNER,
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Vivi (Struggle Tournament)",
	// 	value: "11C26BF0",
	// 	enemy: Enemies.VIVI_STRUGGLE,
	// },
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Sandlot (Struggle Tournament) Nobodies",
		world: "02",
		room: "05",
		event: "56",
		enemies: [
			{
				enemy: Enemies.DUSK,
				value: "11C26D24",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C26D64",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C26DA4",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Axel I Boss Fight",
		world: "02",
		room: "05",
		event: "57",
		enemies: [
			// {
			// 	enemy: Enemies.AXEL_I,
			// 	value: "11C26ED8",
			// },
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Setzer (Struggle Tournament)",
	// 	value: "11C2700C",
	// 	enemy: Enemies.SETZER,
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Seifer (Day 4)",
	// 	enemies: [
	// 		{
	// 			enemy: Enemies.SEIFER,
	// 			value: "11C375E4",
	// 		},
	// 	],
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Vivi Clones",
	// 	world: "02",
	// 	room: "24",
	// 	event: "9F",
	// 	enemies: [
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58B68",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58BA8",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58BE8",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58C28",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58C68",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58CA8",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58CE8",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58D28",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58D68",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58DA8",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58DE8",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58E28",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58E68",
	// 		},
	// 		{
	// 			enemy: Enemies.VIVI_CLONE,
	// 			value: "11C58EA8",
	// 		},
	// 	],
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Shadow Roxas (7 Wonders)",
		world: "02",
		room: "0A",
		event: "79",
		enemies: [
			// {
			// 	enemy: Enemies.SHADOW_ROXAS,
			// 	value: "11C53F9C",
			// },
		],
	},
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Sunset Hill Bag Mini-Game",
	// 	value: "11C509BC",
	// 	enemy: Enemies.???,
	// 	/// Trash can
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Sunset Hill Bag Mini-Game",
	// 	value: "11C509FC",
	// 	enemy: Enemies.???,
	// 	/// Trash can
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.SIMULATED_TWILIGHT_TOWN,
	// 	description: "Sunset Hill Bag Mini-Game",
	// 	value: "11C50A3C",
	// 	enemy: Enemies.???,
	// 	/// Trash can
	// },
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Back Alley Nobodies",
		world: "02",
		room: "03",
		event: "49",
		enemies: [
			{
				enemy: Enemies.ASSASSIN,
				value: "11C50104",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C50144",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C50184",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Mansion: Basement Hall Nobodies",
		world: "02",
		room: "13",
		event: "86",
		enemies: [
			{
				enemy: Enemies.DUSK,
				value: "11C55B94",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C55BD4",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C55C14",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C55C54",
			},
			{
				enemy: Enemies.ASSASSIN,
				value: "11C55C94",
			},
			{
				enemy: Enemies.ASSASSIN,
				value: "11C55CD4",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Axel II Boss Fight",
		world: "02",
		room: "14",
		event: "89",
		enemies: [
			{
				enemy: Enemies.AXEL_II,
				value: "11C5AF88",
			},
		],
	},
];
