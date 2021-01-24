import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const poohEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.POOH,
		description: "The Expotition",
		world: "09",
		room: "09",
		event: "3D",
		enemies: [
			{
				enemy: Enemies.BEES_100AC,
				value: "11C517AC",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C517EC",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C5182C",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C5186C",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C51930",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C51970",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C519B0",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C519F0",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C51A30",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C51A70",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C51B74",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C51BB4",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C51BF4",
			},
			{
				enemy: Enemies.BEES_100AC,
				value: "11C51C34",
			},
		],
	},
];
