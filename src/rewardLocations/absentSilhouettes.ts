import { Rewards } from "../rewards";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import {
	RewardLocation,
	RewardLocationName,
	RewardLocationType,
} from "./RewardLocation";

const larxeneExclude: Reward[] = [
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGES,
];

export const absentSilhouettesRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Road to Discovery (Vexen)",
		value: "11CE0A3E",
		reward: Rewards.ROAD_TO_DISCOVERY,
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Strength Beyond Strength (Lexaeus)",
		value: "11CE0A4A",
		reward: Rewards.STRENGTH_BEYOND_STRENGTH,
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Book of Shadows (Zexion)",
		value: "11CE0A56",
		reward: Rewards.BOOK_OF_SHADOWS,
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Cloaked Thunder (Larxene)",
		value: "11CE0A62",
		reward: Rewards.CLOAKED_THUNDER,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude: larxeneExclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Eternal Blossom (Marluxia)",
		value: "11CE0A6E",
		reward: Rewards.ETERNAL_BLOSSOM,
	},
];
