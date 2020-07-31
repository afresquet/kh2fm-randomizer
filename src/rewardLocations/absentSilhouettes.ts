import { LocationName } from "../LocationName";
import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const larxeneExclude: Reward[] = [
	...Object.values(formRewards),
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGES,
];

export const absentSilhouettesRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ABSENT_SILHOUETTE,
		description: "Road to Discovery (Vexen)",
		value: "11CE0A3E",
		reward: Rewards.ROAD_TO_DISCOVERY,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.HALLOWEEN_TOWN,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ABSENT_SILHOUETTE,
		description: "Strength Beyond Strength (Lexaeus)",
		value: "11CE0A4A",
		reward: Rewards.STRENGTH_BEYOND_STRENGTH,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.AGRABAH,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ABSENT_SILHOUETTE,
		description: "Book of Shadows (Zexion)",
		value: "11CE0A56",
		reward: Rewards.BOOK_OF_SHADOWS,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.OLYMPUS,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ABSENT_SILHOUETTE,
		description: "Cloaked Thunder (Larxene)",
		value: "11CE0A62",
		reward: Rewards.CLOAKED_THUNDER,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.ATLANTICA,
				exclude: larxeneExclude,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ABSENT_SILHOUETTE,
		description: "Eternal Blossom (Marluxia)",
		value: "11CE0A6E",
		reward: Rewards.ETERNAL_BLOSSOM,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.DISNEY_CASTLE,
			},
		},
	},
];
