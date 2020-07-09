import { Enemies } from "../enemies";
import { LocationName } from "../LocationName";
import { EnemyLocation, EnemyLocationType } from "./EnemyLocation";

export const organizationXIIIEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Xemnas I Data Fight",
		enemies: [
			{
				enemy: Enemies.XEMNAS_DATA,
				value: "11C59BA8",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Xemnas II Data Fight",
		enemies: [
			{
				enemy: Enemies.FINAL_XEMNAS_DATA,
				value: "11C55AAC",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Xigbar Data Fight",
		enemies: [
			{
				enemy: Enemies.XIGBAR_DATA,
				value: "11C4ACBC",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Xaldin Data Fight",
		enemies: [
			{
				enemy: Enemies.XALDIN_DATA,
				value: "11C5A1DC",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Vexen Data Fight",
		enemies: [
			{
				enemy: Enemies.VEXEN_DATA,
				value: "11C598D4",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Lexaeus Data Fight",
		enemies: [
			{
				enemy: Enemies.LEXAUS_DATA,
				value: "11C56734",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.CAVERN_OF_REMEMBRANCE,
	// 	description: "Zexion Data Fight",
	// 	value: "11C59914",
	// 	enemy: Enemies.???,
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Saix Data Fight",
		enemies: [
			{
				enemy: Enemies.SAIX_DATA,
				value: "11C521E0",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Axel Data Fight",
		enemies: [
			{
				enemy: Enemies.AXEL_DATA,
				value: "11C5B0BC",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Demyx II Data Fight",
		enemies: [
			{
				enemy: Enemies.DEMYX_DATA,
				value: "11C4D054",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Luxord Data Fight",
		enemies: [
			{
				enemy: Enemies.LUXORD_DATA,
				value: "11C53700",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Marluxia Data Fight",
		enemies: [
			{
				enemy: Enemies.MARLUXIA_DATA,
				value: "11C59114",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Larxene Data Fight",
		enemies: [
			{
				enemy: Enemies.LARXENE_DATA,
				value: "11C56868",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Roxas Data Fight",
		enemies: [
			{
				enemy: Enemies.ROXAS_DATA,
				value: "11C4F13C",
			},
		],
	},
];
