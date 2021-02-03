import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const spaceParanoidsEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.SPACE_PARANOIDS,
		description: "Hostile Program Boss Fight",
		world: "11",
		room: "04",
		event: "37",
		enemies: [
			{
				enemy: Enemies.HOSTILE_PROGRAM,
				value: "11C56530",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.SPACE_PARANOIDS,
		description: "Game Grid Heartless Fight",
		world: "11",
		room: "02",
		event: "35",
		enemies: [
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C56184",
			},
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C561C4",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C56204",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C56244",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C56284",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C562C4",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C56304",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C56344",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.SPACE_PARANOIDS,
		description: "I/O Tower Heartless Fight",
		world: "11",
		room: "04",
		event: "38",
		enemies: [
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C566D0",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C56710",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C56750",
			},
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C56790",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C567D0",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C56810",
			},
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C56850",
			},
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C56890",
			},
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C568D0",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.SPACE_PARANOIDS,
		description: "Solar Sailer Heartless",
		world: "11",
		room: "07",
		event: "39",
		enemies: [
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C59864",
			},
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C598A4",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C598E4",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C59990",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C599D0",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C59A10",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C59AEC",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C59B2C",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C59B6C",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C59BAC",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C59BEC",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C59C2C",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C59C6C",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C59CAC",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C59CEC",
			},
			{
				enemy: Enemies.MAGNUM_LOADER,
				value: "11C59D2C",
			},
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C59E10",
			},
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C59E50",
			},
			{
				enemy: Enemies.DEVASTATOR,
				value: "11C59E90",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.SPACE_PARANOIDS,
		description: "Sark Boss Fight",
		world: "11",
		room: "09",
		event: "3A",
		enemies: [
			{
				enemy: Enemies.SARK,
				value: "11C4FCC4",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C4FD44",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C4FD84",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C4FDC4",
			},
			{
				enemy: Enemies.STRAFER_FORCED_FIGHTS,
				value: "11C4FE04",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.SPACE_PARANOIDS,
	// 	description: "MCP Boss Fight",
	// 	enemies: [
	// 		{
	// 			enemy: Enemies.SARK_LARGE,
	// 			value: "11C4FFB8",
	// 		},
	// 	],
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.SPACE_PARANOIDS,
	// 	description: "MCP Boss Fight",
	// 	value: "11C4FF78",
	// 	enemy: Enemies.???,
	// },
];
