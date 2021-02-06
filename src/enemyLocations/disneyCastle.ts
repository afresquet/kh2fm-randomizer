import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const disneyCastleEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.DISNEY_CASTLE,
		description: "Escort Queen Minnie Part I",
		world: "0C",
		room: "02",
		event: "02",
		enemies: [
			{
				enemy: Enemies.SHADOW,
				value: "11C57670",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C576B0",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C576F0",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C57730",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C57770",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5781C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5785C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5789C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C578DC",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C57988",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C579C8",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C57A08",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C57A48",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C57A88",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C57AC8",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57B08",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57B48",
			},
			{
				enemy: Enemies.BOLT_TOWER_DC,
				value: "11C57BF4",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57C34",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57C74",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57CB4",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57CF4",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57DA0",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57DE0",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57E20",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57E60",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57EA0",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57EE0",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57F8C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C57FCC",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5800C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5804C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C5808C",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C58138",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C58178",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C581B8",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C581F8",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C58238",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C582E4",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C58324",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C58364",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C583A4",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C583E4",
			},
		],
	},
	// Escort Queen Minnie (Part II - Audience Chamber; Bolt Tower Swarm)
	// 11C55860 0000???? - Queen Minnie
	// 11C55940 0000????
	// 11C55980 0000????
	// 11C559C0 0000????
	// 11C55A00 0000????
	// 11C55A40 0000????
	// 11C55A80 0000????
	// 11C55AC0 0000????
	// 11C55B00 0000????
	// 11C55B40 0000????
	// 11C55B80 0000????
	// 11C55BC0 0000????
	// 11C55C00 0000????
	// 11C55C40 0000????
	// 11C55C80 0000????
	// 11C55CC0 0000????
	// 11C55D00 0000????
	// 11C55D40 0000????
	// 11C55D80 0000????
	// 11C55DC0 0000????
	// 11C55E00 0000????
	// 11C55E40 0000????
	// 11C55E80 0000????
	// 11C55EC0 0000????
	// 11C55F00 0000????
	// 11C55F40 0000????
	// 11C55F80 0000????
	// 11C55FC0 0000????
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.DISNEY_CASTLE,
		description: "Lingering Will Boss Fight",
		world: "0A",
		room: "07",
		event: "49",
		enemies: [
			{
				enemy: Enemies.LINGERING_WILL,
				value: "11C556E0",
			},
		],
	},
];
