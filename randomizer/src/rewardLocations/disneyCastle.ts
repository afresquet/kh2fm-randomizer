import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { GameMode } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { Reward } from "../types/Reward";
import {
	LocationDependency,
	RewardLocation,
	RewardLocationType,
} from "../types/RewardLocation";

const exclude: Reward[] = [
	Rewards.PROOF_OF_CONNECTION,
	...Object.values(formRewards),
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGES,
];

const dependencies: LocationDependency[] = [
	{
		candidate: Rewards.PROOF_OF_PEACE,
		name: "Proof of Peace",
		address: "11CE0B3A",
		conflict: [Rewards.PROOF_OF_CONNECTION],
	},
	{
		candidate: Rewards.PROOF_OF_PEACE,
		name: "Winner's Proof",
		address: "11CE0B2E",
		conflict: [Rewards.PROOF_OF_CONNECTION],
	},
];

export const disneyCastleRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		location: LocationName.DISNEY_CASTLE,
		description: "Courtyard",
		value: "11CDF9B2",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.DISNEY_CASTLE,
		description: "Courtyard",
		value: "11CDF9BE",
		reward: Rewards.STAR_RECIPE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.DISNEY_CASTLE,
		description: "Courtyard",
		value: "11CDF9CA",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.DISNEY_CASTLE,
		description: "Courtyard",
		value: "11CDF9D6",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.DISNEY_CASTLE,
		description: "Courtyard",
		value: "11CDF9E2",
		reward: Rewards.BLAZING_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.DISNEY_CASTLE,
		description: "Courtyard",
		value: "11CDF9EE",
		reward: Rewards.BLAZING_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.DISNEY_CASTLE,
		description: "Courtyard",
		value: "11CDF9FA",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.DISNEY_CASTLE,
		description: "Library",
		value: "11CDFA06",
		reward: Rewards.TORN_PAGES,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.DISNEY_CASTLE,
		description: "Queen Minnie Escort",
		value: "21D10D28",
		reward: Rewards.AUTO_SUMMON,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DISNEY_CASTLE,
		description: "Disney Castle Map",
		value: "11CE0756",
		reward: Rewards.DISNEY_CASTLE_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DISNEY_CASTLE,
		description: "Proof of Connection",
		value: "11CE0B16",
		reward: Rewards.PROOF_OF_CONNECTION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude,
				dependencies,
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.DISNEY_CASTLE,
		description: "Manifest Illusion (Lingering Will)",
		value: "11CE0B22",
		reward: Rewards.MANIFEST_ILLUSION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude,
				dependencies,
			},
		},
	},
];
