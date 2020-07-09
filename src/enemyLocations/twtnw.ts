import { Enemies } from "../enemies";
import { LocationName } from "../LocationName";
import { EnemyLocation, EnemyLocationType } from "./EnemyLocation";

export const twtnwEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.TWTNW,
		description: "Roxas Boss Fight",
		enemies: [
			{
				enemy: Enemies.ROXAS,
				value: "11C4F008",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.TWTNW,
	// 	description: "Xigbar Boss Fight",
	// 	value: "11C4AB88",
	// 	enemy: Enemies.???,
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.TWTNW,
	// 	description: "Luxord Boss Fight",
	// 	value: "11C5358C",
	// 	enemy: Enemies.???,
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.TWTNW,
		description: "Saix Boss Fight",
		enemies: [
			{
				value: "11C520AC",
				enemy: Enemies.SAIX,
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.TWTNW,
		description: "Xemnas I Boss Fight",
		enemies: [
			{
				value: "11C5990C",
				enemy: Enemies.XEMNAS,
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.TWTNW,
		description: "The World of Nothing (Cylinder Lasers) Fight",
		enemies: [
			{
				enemy: Enemies.NOBODY_FROM_FINAL_BATTLE_V1,
				value: "11C5C118",
			},
			{
				enemy: Enemies.NOBODY_FROM_FINAL_BATTLE_V1,
				value: "11C5C158",
			},
			{
				enemy: Enemies.NOBODY_FROM_FINAL_BATTLE_V1,
				value: "11C5C198",
			},
			{
				enemy: Enemies.NOBODY_FROM_FINAL_BATTLE_V1,
				value: "11C5C1D8",
			},
			{
				enemy: Enemies.NOBODY_FROM_FINAL_BATTLE_V1,
				value: "11C5C218",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.TWTNW,
		description: "The World of Nothing (Energy Core) Fight",
		enemies: [
			{
				enemy: Enemies.ASSASSIN,
				value: "11C5B890",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5B8D0",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5B910",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5B950",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5B990",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5B9D0",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5BA10",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5BA50",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5BA90",
			},
			{
				enemy: Enemies.BERSERKER,
				value: "11C5BB6C",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5BBAC",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5BBEC",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5BC2C",
			},
			{
				enemy: Enemies.CREEPER,
				value: "11C5BC6C",
			},
			{
				enemy: Enemies.ASSASSIN,
				value: "11C5BCAC",
			},
			{
				enemy: Enemies.ASSASSIN,
				value: "11C5BCEC",
			},
			{
				enemy: Enemies.ASSASSIN,
				value: "11C5BD2C",
			},
			{
				enemy: Enemies.ASSASSIN,
				value: "11C5BD6C",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.TWTNW,
		description: "Armor Xemnas I Boss Fight",
		enemies: [
			{
				value: "11C5A9AC",
				enemy: Enemies.ARMOR_XEMNAS,
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.TWTNW,
		description: "Armor Xemnas II Boss Fight",
		enemies: [
			{
				value: "11C58840",
				enemy: Enemies.ARMOR_XEMNAS,
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.TWTNW,
		description: "Final Xemnas Boss Fight",
		enemies: [
			{
				value: "11C5590C",
				enemy: Enemies.FINAL_XEMNAS,
			},
		],
	},
];
