import { GameMode } from "../Configuration";
import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const exclude: Reward[] = [...Object.values(formRewards), Rewards.TORN_PAGE];

export const formGrowthAbilitiesRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.form,
		description: "Valor LV3",
		value: "11D1A236",
		reward: Rewards.HIGH_JUMP_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Valor LV5",
		value: "11D1A246",
		reward: Rewards.HIGH_JUMP_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Valor LV7",
		value: "11D1A256",
		reward: Rewards.HIGH_JUMP_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Wisdom LV3",
		value: "11D1A26E",
		reward: Rewards.QUICK_RUN_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Wisdom LV5",
		value: "11D1A27E",
		reward: Rewards.QUICK_RUN_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Wisdom LV7",
		value: "11D1A28E",
		reward: Rewards.QUICK_RUN_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Limit LV3",
		value: "11D1A2A6",
		reward: Rewards.DODGE_ROLL_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Limit LV5",
		value: "11D1A2B6",
		reward: Rewards.DODGE_ROLL_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Limit LV7",
		value: "11D1A2C6",
		reward: Rewards.DODGE_ROLL_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Master LV3",
		value: "11D1A2DE",
		reward: Rewards.AERIAL_DODGE_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Master LV5",
		value: "11D1A2EE",
		reward: Rewards.AERIAL_DODGE_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Master LV7",
		value: "11D1A2FE",
		reward: Rewards.AERIAL_DODGE_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Final LV3",
		value: "11D1A316",
		reward: Rewards.GLIDE_ONE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Final LV5",
		value: "11D1A326",
		reward: Rewards.GLIDE_TWO,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Final LV7",
		value: "11D1A336",
		reward: Rewards.GLIDE_THREE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
];
