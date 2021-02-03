import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const portRoyalEnemyLocations: EnemyLocation[] = [
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates (1st Visit; Part I)",
	// 	value: "11C42BB0 ",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate B |
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates (1st Visit; Part I)",
	// 	value: "11C42C30",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate C |
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates (1st Visit; Part I)",
	// 	value: "11C42C70",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate C |
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates (1st Visit; Part I)",
	// 	value: "11C42CB0",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate C |
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates (1st Visit; Part I)",
	// 	value: "11C42DE4",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate C |
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates (1st Visit; Part I)",
	// 	value: "11C42E24",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate B |
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates (1st Visit; Part I)",
	// 	value: "11C42E64",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate C |
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates (1st Visit; Part I)",
	// 	value: "11C42EA4",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate C |
	// },
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.PORT_ROYAL,
		description: "Town Heartless",
		world: "10",
		room: "02",
		event: "37",
		enemies: [
			{
				enemy: Enemies.SHADOW,
				value: "11C56984",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C569C4",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C56A04",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C56A44",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C56A84",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C56AC4",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C56BA0",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C56BE0",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C56C20",
			},
			{
				enemy: Enemies.CANNON_GUN,
				value: "11C56C60",
			},
			{
				enemy: Enemies.CANNON_GUN,
				value: "11C56CA0",
			},
			{
				enemy: Enemies.CANNON_GUN,
				value: "11C56CE0",
			},
			{
				enemy: Enemies.SOLDIER,
				value: "11C56D20",
			},
			{
				enemy: Enemies.SOLDIER,
				value: "11C56D60",
			},
		],
	},
	// Isla de Muerta: Cave Mouth Pirates (1 Minute Fight)
	// 11C58104 0000???? - Undead Pirate A (Left)
	// 11C58084 0000???? - Undead Pirate C (Middle)
	// 11C580C4 0000???? - Undead Pirate A (Right)
	// 11C58170 0000????
	// 11C581B0 0000????
	// 11C581F0 0000????
	// 11C58230 0000????
	// 11C58270 0000????
	// {
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E1E0",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate A |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E220",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate C |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E260",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate A |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E2A0",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate B |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E2E0",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate A |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E320",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate A |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E360",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate B |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E3A0",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate A |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E3E0",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate A |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E420",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate B |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E460",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate A |
	// 	},
	// 	{
	// 		type: EnemyLocationType.MOB_FIGHT,
	// 		location: LocationName.PORT_ROYAL,
	// 		description: "The Interceptor Pirates Fight",
	// 		value: "11C4E4A0",
	// 		enemy: Enemies.???,
	// 		// | Undead Pirate B |
	// 	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.PORT_ROYAL,
		description: "The Interceptor Barrels",
		world: "10",
		room: "03",
		event: "38",
		enemies: [
			{
				enemy: Enemies.AIR_PIRATE,
				value: "11C52604",
			},
			{
				enemy: Enemies.AIR_PIRATE,
				value: "11C526E0",
			},
			{
				enemy: Enemies.AIR_PIRATE,
				value: "11C52720",
			},
			{
				enemy: Enemies.AIR_PIRATE,
				value: "11C52760",
			},
			{
				enemy: Enemies.CANNON_GUN,
				value: "11C5283C",
			},
			{
				enemy: Enemies.CANNON_GUN,
				value: "11C52918",
			},
			{
				enemy: Enemies.CANNON_GUN,
				value: "11C529F4",
			},
			{
				enemy: Enemies.CANNON_GUN,
				value: "11C52AD0",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Barbossa Boss Fight",
	// 	value: "11C43370",
	// 	enemy: Enemies.???,
	// 	// | Illuminator |
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Barbossa Boss Fight",
	// 	value: "11C43330",
	// 	enemy: Enemies.???,
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates Fight (2nd Visit)",
	// 	value: "11C42FD8",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate B |
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates Fight (2nd Visit)",
	// 	value: "11C43018",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate A |
	// },
	// {
	// 	type: EnemyLocationType.MOB_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Harbor Pirates Fight (2nd Visit)",
	// 	value: "11C43058",
	// 	enemy: Enemies.???,
	// 	// | Undead Pirate A |
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.PORT_ROYAL,
		description: "Grim Reaper I Boss Fight",
		world: "10",
		room: "12",
		event: "55",
		enemies: [
			{
				enemy: Enemies.GRIM_REAPER,
				value: "11C5BA78",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.PORT_ROYAL,
		description: "Gambler (Ship Graveyard: Seadrift Keep; 1st Fight)",
		world: "10",
		room: "0E",
		event: "3E",
		enemies: [
			{
				enemy: Enemies.GAMBLER,
				value: "11C56F38",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.PORT_ROYAL,
	// 	description: "Grim Reaper II Boss Fight",
	// 	value: "11C4318C",
	// 	enemy: Enemies.GRIM_REAPER,
	// },
];
