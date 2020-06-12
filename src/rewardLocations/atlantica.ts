import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import {
	RewardLocation,
	RewardLocationName,
	RewardLocationType,
} from "./RewardLocation";

const exclude: Reward[] = [
	...Object.values(formRewards),
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGES,
];

export const atlanticaRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.ATLANTICA,
		description: "Undersea Kingdom Map",
		value: "11CE0846",
		reward: Rewards.UNDERSEA_KINGDOM_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.ATLANTICA,
		description: "Mysterious Abyss",
		value: "11CE08E2",
		reward: Rewards.MYSTERIOUS_ABYSS,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.ATLANTICA,
		description: "Blizzard",
		value: "11CE08EE",
		reward: Rewards.BLIZZARD,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		name: RewardLocationName.ATLANTICA,
		description: "Orichalcum+",
		value: "11CE08FA",
		reward: Rewards.ORICHALCUM_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
];
