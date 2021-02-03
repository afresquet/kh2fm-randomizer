import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const mushroomsEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.MISCELLANEOUS,
		location: LocationName.HOLLOW_BASTION,
		description: "Mushrooms",
		world: "",
		room: "",
		event: "",
		enemies: [
			// {
			// 	enemy: Enemies.MUSHROOM_1,
			// 	value: "11C41CB4",
			// },
			// {
			// 	enemy: Enemies.MUSHROOM_2,
			// 	value: "11C56194",
			// },
			// {
			// 	enemy: Enemies.MUSHROOM_3,
			// 	value: "11C55080",
			// },
			{
				enemy: Enemies.MUSHROOM_4,
				value: "11C4C358",
			},
			// {
			// 	enemy: Enemies.MUSHROOM_5,
			// 	value: "11C555CC",
			// },
			// {
			// 	enemy: Enemies.MUSHROOM_6,
			// 	value: "11C53DD8",
			// },
			{
				enemy: Enemies.MUSHROOM_7,
				value: "11C58F8C",
			},
			{
				enemy: Enemies.MUSHROOM_8,
				value: "11C506B8",
			},
			// {
			// 	enemy: Enemies.MUSHROOM_9,
			// 	value: "11C4CEF0",
			// },
			// {
			// 	enemy: Enemies.MUSHROOM_10,
			// 	value: "11C5C13C",
			// },
			{
				enemy: Enemies.MUSHROOM_11,
				value: "11C57220",
			},
			// {
			// 	enemy: Enemies.MUSHROOM_12,
			// 	value: "11C4454C",
			// },
		],
	},
];
