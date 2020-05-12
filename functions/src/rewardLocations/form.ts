import { GameMode } from "../Configuration";
import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const exclude: Reward[] = [...Object.values(formRewards), Rewards.TORN_PAGE];

export const formRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.form,
		description: "Valor LV2",
		value: "11D1A22E",
		reward: Rewards.AUTO_VALOR,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Valor LV4",
		value: "11D1A23E",
		reward: Rewards.COMBO_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Valor LV6",
		value: "11D1A24E",
		reward: Rewards.COMBO_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Wisdom LV2",
		value: "11D1A266",
		reward: Rewards.AUTO_WISDOM,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Wisdom LV4",
		value: "11D1A276",
		reward: Rewards.MP_RAGE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Wisdom LV6",
		value: "11D1A286",
		reward: Rewards.MP_HASTE,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Limit LV2",
		value: "11D1A29E",
		reward: Rewards.AUTO_LIMIT_FORM,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Limit LV4",
		value: "11D1A2AE",
		reward: Rewards.DRAW,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Limit LV6",
		value: "11D1A2BE",
		reward: Rewards.LUCKY_LUCKY,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Master LV2",
		value: "11D1A2D6",
		reward: Rewards.AUTO_MASTER,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Master LV4",
		value: "11D1A2E6",
		reward: Rewards.AIR_COMBO_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Master LV6",
		value: "11D1A2F6",
		reward: Rewards.AIR_COMBO_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Final LV2",
		value: "11D1A30E",
		reward: Rewards.AUTO_FINAL,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Final LV4",
		value: "11D1A31E",
		reward: Rewards.FORM_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
	{
		type: RewardLocationType.form,
		description: "Final LV6",
		value: "11D1A32E",
		reward: Rewards.FORM_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: { 0: { exclude } },
		},
	},
];
