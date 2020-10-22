import { Enemies } from "../enemies";
import { LocationName } from "../LocationName";
import { EnemyLocation, EnemyLocationType } from "./EnemyLocation";

export const olympusEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Hades Chamber Boss Fight",
		maxSize: 4443212, // Larxene
		world: "06",
		room: "06",
		event: "70",
		enemies: [
			{
				enemy: Enemies.HADES_I,
				value: "11C48478"
			}
		]
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Hades Escape",
		maxSize: 2280296, // Hercules
		world: "06",
		room: "05",
		event: "6F",
		enemies: [
			{
				enemy: Enemies.HADES_ESCAPE,
				value: "11C591FC"
			}
		]
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Hades Escape",
		world: "06",
		room: "05",
		event: "6F",
		enemies: [
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C59268",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C592A8",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C592E8",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C59328",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C59368",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C593A8",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C593E8",
			},
			{
				enemy: Enemies.LANCE_SOLDIER,
				value: "11C59454",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C59494",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C594D4",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C59514",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C59554",
			},
			{
				enemy: Enemies.LANCE_SOLDIER,
				value: "11C59594",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C59640",
			},
			{
				enemy: Enemies.LANCE_SOLDIER,
				value: "11C59680",
			},
			{
				enemy: Enemies.LANCE_SOLDIER,
				value: "11C596C0",
			},
			{
				enemy: Enemies.LARGE_BODY,
				value: "11C59700",
			},
			{
				enemy: Enemies.LANCE_SOLDIER,
				value: "11C59740",
			},
			{
				enemy: Enemies.LANCE_SOLDIER,
				value: "11C59780",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C597C0",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C59800",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C59840",
			},
			{
				enemy: Enemies.SHADOW,
				value: "11C59880",
			},
		],
	},
	// {
	//  type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.OLYMPUS,
	// 	description: "Cerberus Boss Fight",
	// 	value: "11C4EF2C",
	// 	enemy: Enemies.???,
	// 	// | Boulder |
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.OLYMPUS,
	// 	description: "Cerberus Boss Fight",
	// 	value: "11C4EF6C",
	// 	enemy: Enemies.???,
	// 	// | Boulder |
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Cerberus Boss Fight",
		maxSize: 4443212, // Larxene
		world: "06",
		room: "07",
		event: "72",
		enemies: [
			{
				enemy: Enemies.CERBERUS,
				value: "11C4EDF8",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.OLYMPUS,
	// 	description: "Demyx I Boss Fight",
	// 	value: "11C527FC",
	// 	enemy: Enemies.???,
	// 	// | Demyx I |
	// },
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.OLYMPUS,
	// 	description: "Pete I Boss Fight",
	// 	value: "11C4F4D0",
	// 	enemy: Enemies.PETE_OC_I,
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Pete II Boss Fight",
		maxSize: 1642502, // Cloud
		world: "06",
		room: "08",
		event: "74",
		enemies: [
			{
				enemy: Enemies.PETE_OC_II,
				value: "11C4FB08",
			},
			{
				enemy: Enemies.TRICK_GHOST,
				value: "11C4FBB4",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C4FBF4",
			},
			{
				enemy: Enemies.TRICK_GHOST,
				value: "11C4FC34",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C4FC74",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C4FCB4",
			},
			{
				enemy: Enemies.HOOK_BAT,
				value: "11C4FCF4",
			},
		],
		// Remove timer
		// patch=1,EE,20349DEC,extended,00000001
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.OLYMPUS,
	// 	description: "Hydra Boss Fight",
	// 	value: "11C566C4",
	// 	enemy: Enemies.HYDRA,
	// },
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Hades Cup - Round 1",
		world: "06",
		room: "09",
		event: "7C",
		enemies: [
			{
				enemy: Enemies.DRILLER_MOLE,
				value: "11C4BCDC",
			},
			{
				enemy: Enemies.TORNADO_STEP,
				value: "11C4BD1C",
			},
			{
				enemy: Enemies.TORNADO_STEP,
				value: "11C4BD5C",
			},
			{
				enemy: Enemies.MORNING_STAR,
				value: "11C4BD9C",
			},
			{
				enemy: Enemies.DRILLER_MOLE,
				value: "11C4BE1C",
			},
			{
				enemy: Enemies.DRILLER_MOLE,
				value: "11C4BE5C",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Hades Cup - Semifinals",
		world: "06",
		room: "09",
		event: "7D",
		enemies: [
			{
				enemy: Enemies.CRESCENDO,
				value: "11C4BFD0",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C4C010",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C4C050",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C4C090",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C4C0D0",
			},
			{
				enemy: Enemies.CRIMSON_JAZZ,
				value: "11C4C110",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C4C150",
			},
			{
				enemy: Enemies.MINUTE_BOMB,
				value: "11C4C190",
			},
		],
	},
	{
		type: EnemyLocationType.MOB_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Hades' Chamber Nobodies Fight",
		world: "06",
		room: "06",
		event: "7E",
		enemies: [
			{
				enemy: Enemies.DUSK,
				value: "11C486D8",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C48718",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C48758",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C48798",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C487D8",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C48818",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C48858",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C48898",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C488D8",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C48918",
			},
			{
				enemy: Enemies.DUSK,
				value: "11C48958",
			},
		],
	},
	// {
	// 	type: EnemyLocationType.BOSS_FIGHT,
	// 	location: LocationName.OLYMPUS,
	// 	description: "Hades Boss Phase I",
	// 	value: "11C5BF7C",
	// 	enemy: Enemies.HADES_I,
	// },
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Hades Boss Phase II",
		maxSize: 2631800, // Shan-Yu
		world: "06",
		room: "0D",
		event: "CA",
		enemies: [
			{
				enemy: Enemies.HADES_II,
				value: "11C5C0B0",
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Pain/Panic Round 10",
		maxSize: 2314684, // Prison Keeper
		world: "06",
		room: "BD",
		event: "0A",
		enemies: [
			{
				enemy: Enemies.LEON,
				value: "11C4DAC4"
			},
			{
				enemy: Enemies.YUFFIE,
				value: "11C4DA84"
			}
		]
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Titan Round 10",
		maxSize: 4443212, // Larxene
		world: "06",
		room: "BF",
		event: "0A",
		enemies: [
			{
				enemy: Enemies.HERCULES_CUPS,
				value: "11C4FCD4"
			}
		]
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Hades Paradox Round 10",
		maxSize: 2314684, // Prison Keeper
		world: "06",
		room: "C4",
		event: "0A",
		enemies: [
			{
				enemy: Enemies.TIFA,
				value: "11C5265C"
			},
			// {
			// 	enemy: Enemies.YUFFIE,
			// 	value: "11C4DA84"?????
			// }
		]
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.OLYMPUS,
		description: "Hades Paradox Round 25",
		maxSize: 2314684, // Prison Keeper
		world: "06",
		room: "C4",
		event: "19",
		enemies: [
			// {
			// 	enemy: Enemies.TIFA,
			// 	value: "11C5265C"
			// },
			{
				enemy: Enemies.CLOUD,
				value: "11C53FF8"
			}
		]
	}
];
