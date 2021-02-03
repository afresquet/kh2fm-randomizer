import { Rewards } from "../rewards";
import { GameMode } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { RewardType } from "../types/Reward";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";

const excludeType: RewardType[] = [RewardType.FORM, RewardType.TORN_PAGES];

export const formRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Valor LV2",
		value: "11D1A22E",
		reward: Rewards.AUTO_VALOR,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Valor LV3",
		value: "11D1A236",
		reward: Rewards.HIGH_JUMP_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Valor LV4",
		value: "11D1A23E",
		reward: Rewards.COMBO_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Valor LV5",
		value: "11D1A246",
		reward: Rewards.HIGH_JUMP_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Valor LV6",
		value: "11D1A24E",
		reward: Rewards.COMBO_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Valor LV7",
		value: "11D1A256",
		reward: Rewards.HIGH_JUMP_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Wisdom LV2",
		value: "11D1A266",
		reward: Rewards.AUTO_WISDOM,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Wisdom LV3",
		value: "11D1A26E",
		reward: Rewards.QUICK_RUN_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Wisdom LV4",
		value: "11D1A276",
		reward: Rewards.MP_RAGE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Wisdom LV5",
		value: "11D1A27E",
		reward: Rewards.QUICK_RUN_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Wisdom LV6",
		value: "11D1A286",
		reward: Rewards.MP_HASTE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Wisdom LV7",
		value: "11D1A28E",
		reward: Rewards.QUICK_RUN_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Limit LV2",
		value: "11D1A29E",
		reward: Rewards.AUTO_LIMIT_FORM,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Limit LV3",
		value: "11D1A2A6",
		reward: Rewards.DODGE_ROLL_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Limit LV4",
		value: "11D1A2AE",
		reward: Rewards.DRAW,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Limit LV5",
		value: "11D1A2B6",
		reward: Rewards.DODGE_ROLL_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Limit LV6",
		value: "11D1A2BE",
		reward: Rewards.LUCKY_LUCKY,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Limit LV7",
		value: "11D1A2C6",
		reward: Rewards.DODGE_ROLL_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Master LV2",
		value: "11D1A2D6",
		reward: Rewards.AUTO_MASTER,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Master LV3",
		value: "11D1A2DE",
		reward: Rewards.AERIAL_DODGE_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Master LV4",
		value: "11D1A2E6",
		reward: Rewards.AIR_COMBO_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Master LV5",
		value: "11D1A2EE",
		reward: Rewards.AERIAL_DODGE_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Master LV6",
		value: "11D1A2F6",
		reward: Rewards.AIR_COMBO_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Master LV7",
		value: "11D1A2FE",
		reward: Rewards.AERIAL_DODGE_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Final LV2",
		value: "11D1A30E",
		reward: Rewards.AUTO_FINAL,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Final LV3",
		value: "11D1A316",
		reward: Rewards.GLIDE_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Final LV4",
		value: "11D1A31E",
		reward: Rewards.FORM_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Final LV5",
		value: "11D1A326",
		reward: Rewards.GLIDE_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Final LV6",
		value: "11D1A32E",
		reward: Rewards.FORM_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
	{
		type: RewardLocationType.FORM,
		location: LocationName.FORM,
		description: "Final LV7",
		value: "11D1A336",
		reward: Rewards.GLIDE_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { excludeType },
		},
	},
];
