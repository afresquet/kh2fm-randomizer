import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const beastsCastleEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.BEASTS_CASTLE,
		description: "Parlor Shadows",
		world: "05",
		room: "01",
		event: "44",
		enemies: [
			{
				enemy: Enemies.SHADOW,
				value: "11C504CC",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5050C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5054C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5058C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C505CC",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5060C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5064C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5068C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C506CC",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5070C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5074C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5078C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C507CC",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5080C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5084C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5088C",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.BEASTS_CASTLE,
		description: "Thresholder Boss Fight",
		world: "05",
		room: "0B",
		event: "48",
		enemies: [
			// {
			// 	enemy: Enemies.THRESHOLDER,
			// 	value: "11C55204",
			// },
			// {
			// 	enemy: Enemies.POSSESSOR,
			// 	value: "11C55244",
			// },
			{
				enemy: Enemies.GARGOYLE_WARRIOR,
				value: "11C552B0",
			},
			{
				enemy: Enemies.GARGOYLE_KNIGHT,
				value: "11C552F0",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C55330",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C55370",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C553B0",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C553F0",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C55430",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C55470",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C554B0",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C554F0",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C55530",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C55570",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.BEASTS_CASTLE,
	// 	description: "Beast Boss Fight",
	// 	value: "11C4CBA0",
	// 	enemy: Enemies.THE_BEAST,
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.BEASTS_CASTLE,
	// 	description: "Shadow Stalker Boss Fight",
	// 	value: "11C59F9C",
	// 	enemy: Enemies.???,
	// 	// | Chandelier |
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.BEASTS_CASTLE,
	// 	description: "Shadow Stalker Boss Fight",
	// 	value: "11C5A010",
	// 	enemy: Enemies.???,
	// 	// | Window |
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.BEASTS_CASTLE,
	// 	description: "Shadow Stalker Boss Fight",
	// 	value: "11C5A3A0",
	// 	enemy: Enemies.???,
	// 	// | Pillar |
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.BEASTS_CASTLE,
	// 	description: "Shadow Stalker Boss Fight",
	// 	value: "11C5A360",
	// 	enemy: Enemies.SHADOW_STALKER,
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.BEASTS_CASTLE,
	// 	description: "Dark Thorn Boss Fight",
	// 	value: "11C5A16C",
	// 	enemy: Enemies.???,
	// 	// | Chandelier |
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.BEASTS_CASTLE,
		description: "Dark Thorn Boss Fight",
		world: "05",
		room: "05",
		event: "4F",
		enemies: [
			{
				enemy: Enemies.DARK_THORN,
				value: "11C5A4D4",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.BEASTS_CASTLE,
		description: "Ballroom Nobodies Fight",
		world: "05",
		room: "04",
		event: "4A",
		enemies: [
			{
				enemy: Enemies.DRAGOON,
				value: "11C5209C",
			},
			{
				enemy: Enemies.DRAGOON,
				value: "11C520DC",
			},
			{
				enemy: Enemies.DRAGOON,
				value: "11C5211C",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C5215C",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C5219C",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.BEASTS_CASTLE,
		description: "Entrance Hall Nobodies Fight",
		world: "05",
		room: "00",
		event: "4B",
		enemies: [
			{
				enemy: Enemies.DUSK,
				value: "11C500E4",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C50124",
			},
			{
				enemy: Enemies.DRAGOON,
				value: "11C50164",
			},
			{
				enemy: Enemies.DRAGOON,
				value: "11C501A4",
			},
			{
				enemy: Enemies.DRAGOON,
				value: "11C501E4",
			},
			{
				enemy: Enemies.DRAGOON,
				value: "11C50290",
			},
			{
				enemy: Enemies.DRAGOON,
				value: "11C502D0",
			},
			{
				enemy: Enemies.DRAGOON,
				value: "11C50310",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.BEASTS_CASTLE,
		description: "Xaldin Boss Fight",
		world: "05",
		room: "0F",
		event: "52",
		enemies: [
			{
				enemy: Enemies.XALDIN,
				value: "11C5A0A8",
			},
		],
	},
];
