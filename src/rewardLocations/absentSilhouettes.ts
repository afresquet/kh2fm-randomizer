import { Rewards } from "../rewards";
import { GameMode } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";

export const absentSilhouettesRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ABSENT_SILHOUETTE,
		description: "Road to Discovery (Vexen)",
		value: "11CE0A3E",
		reward: Rewards.ROAD_TO_DISCOVERY,
		secondVisit: true,
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
		secondVisit: true,
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
		secondVisit: true,
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
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.SPACE_PARANOIDS,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ABSENT_SILHOUETTE,
		description: "Eternal Blossom (Marluxia)",
		value: "11CE0A6E",
		reward: Rewards.ETERNAL_BLOSSOM,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.DISNEY_CASTLE,
			},
		},
	},
];
