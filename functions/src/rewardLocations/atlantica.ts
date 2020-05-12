import { Rewards } from "../rewards";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

export const atlanticaRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		description: "Undersea Kingdom Map",
		value: "11CE0846",
		reward: Rewards.UNDERSEA_KINGDOM_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Mysterious Abyss",
		value: "11CE08E2",
		reward: Rewards.MYSTERIOUS_ABYSS,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Blizzard Upgrade (Atlantica)",
		value: "11CE08EE",
		reward: Rewards.BLIZZARD,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Orichalcum+ (Atlantica)",
		value: "11CE08FA",
		reward: Rewards.ORICHALCUM_PLUS,
	},
];
