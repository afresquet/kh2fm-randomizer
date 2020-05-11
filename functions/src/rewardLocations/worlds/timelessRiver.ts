import { Rewards } from "../../rewards";
import { RewardLocation, RewardLocationType } from "../RewardLocation";

export const timelessRiverRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.BIGCHEST,
		description: "Timeless River (Cornerstone Hill)",
		value: "11CDF95E",
		reward: Rewards.CORNERSTONE_HILL_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Timeless River (Cornerstone Hill)",
		value: "11CDF96A",
		reward: Rewards.FROST_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Timeless River (Pier)",
		value: "11CDF976",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Timeless River (Pier)",
		value: "11CDF982",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Timeless River (Waterway)",
		value: "11CDF98E",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Timeless River (Waterway)",
		value: "11CDF99A",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Timeless River (Waterway)",
		value: "11CDF9A6",
		reward: Rewards.FROST_STONE,
	},
];
