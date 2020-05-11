import { Rewards } from "../rewards";
import { RewardType } from "../rewards/Reward";
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
		exclude: [RewardType.FORM, RewardType.SPELL],
	},
	{
		type: RewardLocationType.POPUP,
		description: "Blizzard Upgrade (Atlantica)",
		value: "11CE08EE",
		reward: Rewards.BLIZZARD,
		exclude: [RewardType.FORM, RewardType.SPELL],
	},
	{
		type: RewardLocationType.POPUP,
		description: "Orichalcum+ (Atlantica)",
		value: "11CE08FA",
		reward: Rewards.ORICHALCUM_PLUS,
		exclude: [RewardType.FORM, RewardType.SPELL],
	},
];
