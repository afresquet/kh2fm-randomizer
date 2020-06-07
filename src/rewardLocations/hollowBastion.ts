import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const exclude: Reward[] = [
	Rewards.PROOF_OF_PEACE,
	Rewards.PROOF_OF_CONNECTION,
	...Object.values(formRewards),
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGE,
];

export const hollowBastionRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Borough)",
		value: "11CDFF3A",
		reward: Rewards.DRIVE_RECOVERY,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Borough)",
		value: "11CDFF46",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Borough)",
		value: "11CDFF52",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Borough)",
		value: "11CDFF5E",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Borough)",
		value: "11CDFF6A",
		reward: Rewards.DARK_SHARD,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Hollow Bastion (Postern)",
		value: "11CDFF76",
		reward: Rewards.MYTHRIL_GEM,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Postern)",
		value: "11CDFF82",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Postern)",
		value: "11CDFF8E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Corridors)",
		value: "11CDFF9A",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Corridors)",
		value: "11CDFFA6",
		reward: Rewards.MYTHRIL_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Corridors)",
		value: "11CDFFB2",
		reward: Rewards.DARK_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Corridors)",
		value: "11CDFFBE",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Ansem's Study)",
		value: "11CDFFCA",
		reward: Rewards.SKILL_RECIPE,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Hollow Bastion (Ansem's Study)",
		value: "11CDFFD6",
		reward: Rewards.UKELELE_CHARM,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Restoration Site)",
		value: "11CDFFE2",
		reward: Rewards.MOON_RECIPE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Restoration Site)",
		value: "11CDFFEE",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Hollow Bastion (Crystal Fissure)",
		value: "11CDFFFA",
		reward: Rewards.TORN_PAGE,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Hollow Bastion (Crystal Fissure)",
		value: "11CE0006",
		reward: Rewards.THE_GREAT_MAW_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Crystal Fissure)",
		value: "11CE0012",
		reward: Rewards.ENERGY_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Hollow Bastion (Crystal Fissure)",
		value: "11CE001E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Hollow Bastion (Postern)",
		value: "11CE002A",
		reward: Rewards.GULL_WING,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Hollow Bastion (Heartless Manufactory)",
		value: "11CE0036",
		reward: Rewards.COSMIC_CHAIN,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Bailey Nobodies",
		value: "21D10E98",
		reward: Rewards.FIRE,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Demyx (Hollow Bastion)",
		value: "21D10BA8",
		reward: Rewards.BLIZZARD,
	},
	{
		type: RewardLocationType.BONUS,
		description: "1,000 Heartless",
		value: "21D11068",
		reward: Rewards.GUARD_BREAK,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Marketplace Map",
		value: "11CE068A",
		reward: Rewards.MARKETPLACE_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Membership Card",
		value: "11CE0696",
		reward: Rewards.MEMBERSHIP_CARD,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Blizzard Element (Hollow Bastion 1)",
		value: "11CE06A2",
		reward: Rewards.BLIZZARD,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Baseball Charm",
		value: "11CE0702",
		reward: Rewards.BASEBALL_CHARM,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Master Form",
		value: "11CE080A",
		reward: Rewards.MASTER_FORM,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Cure Upgrade (Hollow Bastion)",
		value: "11CE0822",
		reward: Rewards.CURE,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Ice Cream",
		value: "11CE082E",
		reward: Rewards.ICE_CREAM,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Picture",
		value: "11CE083A",
		reward: Rewards.PICTURE,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Sleeping Lion",
		value: "11CE0936",
		reward: Rewards.SLEEPING_LION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Fenrir",
		value: "11CE0942",
		reward: Rewards.FENRIR,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Secret Ansem's Report 1 (1,000 Heartless)",
		value: "11CE09A2",
		reward: Rewards.REPORT_ONE,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Secret Ansem's Report 7 (Bailey Nobodies)",
		value: "11CE09EA",
		reward: Rewards.REPORT_SEVEN,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Proof of Peace",
		value: "11CE0B3A",
		reward: Rewards.PROOF_OF_PEACE,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Winner's Proof",
		value: "11CE0B2E",
		reward: Rewards.WINNERS_PROOF,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
];