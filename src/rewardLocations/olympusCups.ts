import { Rewards } from "../rewards";
import { GameMode } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { RewardType } from "../types/Reward";
import { RewardLocation, RewardLocationType } from "../types/RewardLocation";

export const olympusCupsRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS_CUPS,
		description: "Protect Belt (Pain & Panic Cup)",
		value: "11CE073E",
		reward: Rewards.PROTECT_BELT,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS_CUPS,
		description: "Serenity Gem (Pain & Panic Cup)",
		value: "11CE074A",
		reward: Rewards.SERENITY_GEM,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS_CUPS,
		description: "Rising Dragon (Cerberus Cup)",
		value: "11CE07CE",
		reward: Rewards.RISING_DRAGON,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS_CUPS,
		description: "Serenity Crystal (Cerberus Cup)",
		value: "11CE07DA",
		reward: Rewards.SERENITY_CRYSTAL,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS_CUPS,
		description: "Genji Shield (Titan Cup)",
		value: "11CE089A",
		reward: Rewards.GENJI_SHIELD,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS_CUPS,
		description: "Skillfull Ring (Titan Cup)",
		value: "11CE08A6",
		reward: Rewards.SKILLFUL_RING,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS_CUPS,
		description: "Fatal Crest (Goddess of Fate Cup)",
		value: "11CE094E",
		reward: Rewards.FATAL_CREST,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS_CUPS,
		description: "Orichalcum+ (Goddess of Fate Cup)",
		value: "11CE095A",
		reward: Rewards.ORICHALCUM_PLUS,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS_CUPS,
		description: "Hades Cup Trophy (Hades Cup)",
		value: "11CE0996",
		reward: Rewards.HADES_CUP_TROPHY,
		secondVisit: true,
		gameMode: {
			[GameMode.GOA_MOD]: {
				excludeType: [
					RewardType.FORM,
					RewardType.TORN_PAGES,
					RewardType.SUMMON,
					RewardType.SPELL,
				],
			},
		},
	},
];
