import { GameMode } from "../Configuration";
import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const exclude: Reward[] = Object.values(formRewards);

export const cavernOfRememberanceRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE04E6",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE04F2",
		reward: Rewards.POWER_CRYSTAL,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE04FE",
		reward: Rewards.FROST_CRYSTAL,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE050A",
		reward: Rewards.MANIFEST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE0516",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths Upper Level)",
		value: "11CE0522",
		reward: Rewards.REMEMBRANCE_GEM,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE052E",
		reward: Rewards.SERENITY_GEM,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE053A",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE0546",
		reward: Rewards.SERENITY_CRYSTAL,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE0552",
		reward: Rewards.MANIFEST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE055E",
		reward: Rewards.SERENITY_GEM,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE056A",
		reward: Rewards.DARK_REMEMBRANCE_MAP,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Engine Chamber)",
		value: "11CE0576",
		reward: Rewards.SERENITY_CRYSTAL,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Engine Chamber)",
		value: "11CE0582",
		reward: Rewards.REMEMBRANCE_CRYSTAL,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Engine Chamber)",
		value: "11CE058E",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Engine Chamber)",
		value: "11CE059A",
		reward: Rewards.MANIFEST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mineshaft Lower Level)",
		value: "11CE05A6",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mineshaft Upper Level)",
		value: "11CE05B2",
		reward: Rewards.AP_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Mineshaft Lower Level)",
		value: "11CE05BE",
		reward: Rewards.DEPTHS_OF_REMEMBRANCE_MAP,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Mineshaft Mid Level)",
		value: "11CE05CA",
		reward: Rewards.POWER_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Mineshaft Upper Level)",
		value: "11CE05D6",
		reward: Rewards.MAGIC_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Garden of Assemblage)",
		value: "11CE05E2",
		reward: Rewards.GARDEN_OF_ASSEMBLAGE_MAP,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Garden of Assemblage)",
		value: "11CE05EE",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Garden of Assemblage)",
		value: "11CE05FA",
		reward: Rewards.PROOF_OF_NONEXISTENCE,
	},
];
