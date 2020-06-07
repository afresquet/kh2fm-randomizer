import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const larxeneExclude: Reward[] = [
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGE,
];

export const organizationXIIIRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		description: "Road to Discovery",
		value: "11CE0A3E",
		reward: Rewards.ROAD_TO_DISCOVERY,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Strength Beyond Strength",
		value: "11CE0A4A",
		reward: Rewards.STRENGTH_BEYOND_STRENGTH,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Book of Shadows",
		value: "11CE0A56",
		reward: Rewards.BOOK_OF_SHADOWS,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Cloaked Thunder",
		value: "11CE0A62",
		reward: Rewards.CLOAKED_THUNDER,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude: larxeneExclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Eternal Blossom",
		value: "11CE0A6E",
		reward: Rewards.ETERNAL_BLOSSOM,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Power Boost (Data Xemnas)",
		value: "11CE0ADA",
		reward: Rewards.POWER_BOOST,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Defense Boost (Data Xigbar)",
		value: "11CE0AE6",
		reward: Rewards.DEFENSE_BOOST,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Defense Boost (Data Xaldin)",
		value: "11CE0AC2",
		reward: Rewards.DEFENSE_BOOST,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Vexen)",
		value: "11CE0A7A",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Lexaeus)",
		value: "11CE0A86",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Zexion)",
		value: "11CE0A92",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Defense Boost (Data Saix)",
		value: "11CE0AF2",
		reward: Rewards.DEFENSE_BOOST,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Magic Boost (Data Axel)",
		value: "11CE0ACE",
		reward: Rewards.MAGIC_BOOST,
	},
	{
		type: RewardLocationType.POPUP,
		description: "AP Boost (Data Demyx)",
		value: "11CE0AB6",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude: Object.values(formRewards) },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "AP Boost (Data Luxord)",
		value: "11CE0AFE",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Marluxia)",
		value: "11CE0AAA",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Larxene)",
		value: "11CE0A9E",
		reward: Rewards.LOST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude: larxeneExclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Magic Boost (Data Roxas)",
		value: "11CE0B0A",
		reward: Rewards.MAGIC_BOOST,
	},
];
