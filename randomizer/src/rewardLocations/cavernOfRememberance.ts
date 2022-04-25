import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { growthAbilityRewards } from "../rewards/growthAbility";
import { GameMode } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { Reward } from "../types/Reward";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";

const exclude: Reward[] = [
	...Object.values(formRewards),
	...Object.values(growthAbilityRewards),
];

export const cavernOfRememberanceRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Depths",
		value: "11CE04E6",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Depths",
		value: "11CE04F2",
		reward: Rewards.POWER_CRYSTAL,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Depths",
		value: "11CE04FE",
		reward: Rewards.FROST_CRYSTAL,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Depths",
		value: "11CE050A",
		reward: Rewards.MANIFEST_ILLUSION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Depths",
		value: "11CE0516",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Depths Upper Level",
		value: "11CE0522",
		reward: Rewards.REMEMBRANCE_GEM,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mining Area",
		value: "11CE052E",
		reward: Rewards.SERENITY_GEM,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mining Area",
		value: "11CE053A",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mining Area",
		value: "11CE0546",
		reward: Rewards.SERENITY_CRYSTAL,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mining Area",
		value: "11CE0552",
		reward: Rewards.MANIFEST_ILLUSION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mining Area",
		value: "11CE055E",
		reward: Rewards.SERENITY_GEM,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mining Area",
		value: "11CE056A",
		reward: Rewards.DARK_REMEMBRANCE_MAP,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Engine Chamber",
		value: "11CE0576",
		reward: Rewards.SERENITY_CRYSTAL,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Engine Chamber",
		value: "11CE0582",
		reward: Rewards.REMEMBRANCE_CRYSTAL,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Engine Chamber",
		value: "11CE058E",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Engine Chamber",
		value: "11CE059A",
		reward: Rewards.MANIFEST_ILLUSION,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mineshaft Lower Level",
		value: "11CE05A6",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mineshaft Upper Level",
		value: "11CE05B2",
		reward: Rewards.AP_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mineshaft Lower Level",
		value: "11CE05BE",
		reward: Rewards.DEPTHS_OF_REMEMBRANCE_MAP,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mineshaft Mid Level",
		value: "11CE05CA",
		reward: Rewards.POWER_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Mineshaft Upper Level",
		value: "11CE05D6",
		reward: Rewards.MAGIC_BOOST,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Garden of Assemblage",
		value: "11CE05E2",
		reward: Rewards.GARDEN_OF_ASSEMBLAGE_MAP,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Garden of Assemblage",
		value: "11CE05EE",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Garden of Assemblage",
		value: "11CE05FA",
		reward: Rewards.PROOF_OF_NONEXISTENCE,
	},
];
