import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { GameMode } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { Reward } from "../types/Reward";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";

const exclude: Reward[] = [
	...Object.values(formRewards),
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGES,
];

export const atlanticaRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ATLANTICA,
		description: "Undersea Kingdom Map",
		value: "11CE0846",
		reward: Rewards.UNDERSEA_KINGDOM_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ATLANTICA,
		description: "Mysterious Abyss",
		value: "11CE08E2",
		reward: Rewards.MYSTERIOUS_ABYSS,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ATLANTICA,
		description: "Blizzard",
		value: "11CE08EE",
		reward: Rewards.BLIZZARD,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.ATLANTICA,
		description: "Orichalcum+",
		value: "11CE08FA",
		reward: Rewards.ORICHALCUM_PLUS,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
];
