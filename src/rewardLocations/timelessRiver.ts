import { Rewards } from "../rewards";
import { LocationName } from "../types/LocationName";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";

export const timelessRiverRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.TIMELESS_RIVER,
		description: "Cornerstone Hill",
		value: "11CDF95E",
		reward: Rewards.CORNERSTONE_HILL_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.TIMELESS_RIVER,
		description: "Cornerstone Hill",
		value: "11CDF96A",
		reward: Rewards.FROST_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.TIMELESS_RIVER,
		description: "Pier",
		value: "11CDF976",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.TIMELESS_RIVER,
		description: "Pier",
		value: "11CDF982",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.TIMELESS_RIVER,
		description: "Waterway",
		value: "11CDF98E",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.TIMELESS_RIVER,
		description: "Waterway",
		value: "11CDF99A",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.TIMELESS_RIVER,
		description: "Waterway",
		value: "11CDF9A6",
		reward: Rewards.FROST_STONE,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.TIMELESS_RIVER,
		description: "Steamboat Fight",
		value: "21D10988",
		reward: Rewards.DODGE_SLASH,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.TIMELESS_RIVER,
		description: "Pete",
		value: "21D109B8",
		reward: Rewards.REFLECT,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.TIMELESS_RIVER,
		description: "Window of Time Map",
		value: "11CE076E",
		reward: Rewards.WINDOW_OF_TIME_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.TIMELESS_RIVER,
		description: "Monochrome",
		value: "11CE0732",
		reward: Rewards.MONOCHROME,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.TIMELESS_RIVER,
		description: "Wisdom Form",
		value: "11CE0762",
		reward: Rewards.WISDOM_FORM,
	},
];
