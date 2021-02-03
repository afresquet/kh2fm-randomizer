import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { GameMode } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";

export const dataOrganizationXIIIRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Power Boost (Data Xemnas)",
		value: "11CE0ADA",
		reward: Rewards.POWER_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.TWTNW,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Defense Boost (Data Xigbar)",
		value: "11CE0AE6",
		reward: Rewards.DEFENSE_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.LAND_OF_DRAGONS,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Defense Boost (Data Xaldin)",
		value: "11CE0AC2",
		reward: Rewards.DEFENSE_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.BEASTS_CASTLE,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Vexen)",
		value: "11CE0A7A",
		reward: Rewards.LOST_ILLUSION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.HALLOWEEN_TOWN,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Lexaeus)",
		value: "11CE0A86",
		reward: Rewards.LOST_ILLUSION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.AGRABAH,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Zexion)",
		value: "11CE0A92",
		reward: Rewards.LOST_ILLUSION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.OLYMPUS,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Defense Boost (Data Saix)",
		value: "11CE0AF2",
		reward: Rewards.DEFENSE_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.PRIDE_LANDS,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Magic Boost (Data Axel)",
		value: "11CE0ACE",
		reward: Rewards.MAGIC_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.TWILIGHT_TOWN,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "AP Boost (Data Demyx)",
		value: "11CE0AB6",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.HOLLOW_BASTION,
				exclude: Object.values(formRewards),
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "AP Boost (Data Luxord)",
		value: "11CE0AFE",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.PORT_ROYAL,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Marluxia)",
		value: "11CE0AAA",
		reward: Rewards.LOST_ILLUSION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.DISNEY_CASTLE,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Lost Illusion (Larxene)",
		value: "11CE0A9E",
		reward: Rewards.LOST_ILLUSION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.SPACE_PARANOIDS,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DATA_ORGANIZATION_XIII,
		description: "Magic Boost (Data Roxas)",
		value: "11CE0B0A",
		reward: Rewards.MAGIC_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				world: LocationName.SIMULATED_TWILIGHT_TOWN,
			},
		},
	},
];
