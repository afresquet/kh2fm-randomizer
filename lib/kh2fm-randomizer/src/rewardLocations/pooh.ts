import { Rewards } from "../rewards";
import { GameMode } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { Reward } from "../types/Reward";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";

const exclude: Reward[] = [Rewards.TORN_PAGES];

export const poohRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.POOH,
		description: "Pooh Bear's House",
		value: "11CDFA12",
		reward: Rewards.HUNDRED_ACRE_WOOD_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "Pooh Bear's House",
		value: "11CDFA1E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "Pooh Bear's House",
		value: "11CDFA2A",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.POOH,
		description: "Piglet's House",
		value: "11CDFA36",
		reward: Rewards.DEFENSE_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "Piglet's House",
		value: "11CDFA42",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "Piglet's House",
		value: "11CDFA4E",
		reward: Rewards.MYTHRIL_GEM,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.POOH,
		description: "Rabbit's House",
		value: "11CDFA5A",
		reward: Rewards.DRAW_RING,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "Rabbit's House",
		value: "11CDFA66",
		reward: Rewards.MYTHRIL_CRYSTAL,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "Rabbit's House",
		value: "11CDFA72",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.POOH,
		description: "Kanga's House",
		value: "11CDFA7E",
		reward: Rewards.MAGIC_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "Kanga's House",
		value: "11CDFA8A",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "Kanga's House",
		value: "11CDFA96",
		reward: Rewards.ORICHALCUM,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "The Spooky Cave",
		value: "11CDFAA2",
		reward: Rewards.MYTHRIL_GEM,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "The Spooky Cave",
		value: "11CDFAAE",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "The Spooky Cave",
		value: "11CDFABA",
		reward: Rewards.ORICHALCUM,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "The Spooky Cave",
		value: "11CDFAC6",
		reward: Rewards.GUARD_RECIPE,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "The Spooky Cave",
		value: "11CDFAD2",
		reward: Rewards.MYTHRIL_CRYSTAL,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "The Spooky Cave",
		value: "11CDFADE",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.POOH,
		description: "Starry Hill",
		value: "11CDFAEA",
		reward: Rewards.COSMIC_RING,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.POOH,
		description: "Starry Hill",
		value: "11CDFAF6",
		reward: Rewards.STYLE_RECIPE,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.POOH,
		description: "Sweet Memories",
		value: "11CE0906",
		reward: Rewards.SWEET_MEMORIES,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.POOH,
		description: "Spooky Cave Map",
		value: "11CE0912",
		reward: Rewards.SPOOKY_CAVE_MAP,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.POOH,
		description: "Cure",
		value: "11CE091E",
		reward: Rewards.CURE,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.POOH,
		description: "Orichalcum+",
		value: "11CE092A",
		reward: Rewards.ORICHALCUM_PLUS,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
];
