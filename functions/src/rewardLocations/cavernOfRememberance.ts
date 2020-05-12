import { Rewards } from "../rewards";
import { RewardType } from "../rewards/Reward";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

export const cavernOfRememberanceRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE04E6",
		reward: Rewards.AP_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE04F2",
		reward: Rewards.POWER_CRYSTAL,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE04FE",
		reward: Rewards.FROST_CRYSTAL,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE050A",
		reward: Rewards.MANIFEST_ILLUSION,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths)",
		value: "11CE0516",
		reward: Rewards.AP_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Depths Upper Level)",
		value: "11CE0522",
		reward: Rewards.REMEMBRANCE_GEM,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE052E",
		reward: Rewards.SERENITY_GEM,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE053A",
		reward: Rewards.AP_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE0546",
		reward: Rewards.SERENITY_CRYSTAL,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE0552",
		reward: Rewards.MANIFEST_ILLUSION,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE055E",
		reward: Rewards.SERENITY_GEM,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Mining Area)",
		value: "11CE056A",
		reward: Rewards.DARK_REMEMBRANCE_MAP,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Engine Chamber)",
		value: "11CE0576",
		reward: Rewards.SERENITY_CRYSTAL,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Engine Chamber)",
		value: "11CE0582",
		reward: Rewards.REMEMBRANCE_CRYSTAL,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Engine Chamber)",
		value: "11CE058E",
		reward: Rewards.AP_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Engine Chamber)",
		value: "11CE059A",
		reward: Rewards.MANIFEST_ILLUSION,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mineshaft Lower Level)",
		value: "11CE05A6",
		reward: Rewards.AP_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.CHEST,
		description: "Cavern of Remembrance (Mineshaft Upper Level)",
		value: "11CE05B2",
		reward: Rewards.AP_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Mineshaft Lower Level)",
		value: "11CE05BE",
		reward: Rewards.DEPTHS_OF_REMEMBRANCE_MAP,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Mineshaft Mid Level)",
		value: "11CE05CA",
		reward: Rewards.POWER_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Mineshaft Upper Level)",
		value: "11CE05D6",
		reward: Rewards.MAGIC_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Garden of Assemblage)",
		value: "11CE05E2",
		reward: Rewards.GARDEN_OF_ASSEMBLAGE_MAP,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Garden of Assemblage)",
		value: "11CE05EE",
		reward: Rewards.LOST_ILLUSION,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Cavern of Remembrance (Garden of Assemblage)",
		value: "11CE05FA",
		reward: Rewards.PROOF_OF_NONEXISTENCE,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.POPUP,
		description: "Road to Discovery",
		value: "11CE0A3E",
		reward: Rewards.ROAD_TO_DISCOVERY,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Strength Beyond Strength",
		value: "11CE0A4A",
		reward: Rewards.STRENGTH_BEYOND_STRENGTH,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Book of Shadows",
		value: "11CE0A56",
		reward: Rewards.BOOK_OF_SHADOWS,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Cloaked Thunder",
		value: "11CE0A62",
		reward: Rewards.CLOAKED_THUNDER,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Eternal Blossom",
		value: "11CE0A6E",
		reward: Rewards.ETERNAL_BLOSSOM,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Power Boost (Data Xemnas)",
		value: "11CE0ADA",
		reward: Rewards.POWER_BOOST,
		exclude: [RewardType.FORM, RewardType.TORNPAGE, RewardType.SPELL],
	},
	{
		type: RewardLocationType.POPUP,
		description: "Defense Boost (Data Xigbar)",
		value: "11CE0AE6",
		reward: Rewards.DEFENSE_BOOST,
		exclude: [RewardType.FORM, RewardType.TORNPAGE, RewardType.SPELL],
	},
	{
		type: RewardLocationType.POPUP,
		description: "Defense Boost (Data Xaldin)",
		value: "11CE0AC2",
		reward: Rewards.DEFENSE_BOOST,
		exclude: [RewardType.FORM, RewardType.TORNPAGE, RewardType.SPELL],
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Vexen)",
		value: "11CE0A7A",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Lexaeus)",
		value: "11CE0A86",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Zexion)",
		value: "11CE0A92",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Defense Boost (Data Saix)",
		value: "11CE0AF2",
		reward: Rewards.DEFENSE_BOOST,
		exclude: [RewardType.FORM, RewardType.TORNPAGE, RewardType.SPELL],
	},
	{
		type: RewardLocationType.POPUP,
		description: "Magic Boost (Data Axel)",
		value: "11CE0ACE",
		reward: Rewards.MAGIC_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.POPUP,
		description: "AP Boost (Data Demyx)",
		value: "11CE0AB6",
		reward: Rewards.AP_BOOST,
		exclude: [RewardType.FORM],
	},
	{
		type: RewardLocationType.POPUP,
		description: "AP Boost (Data Luxord)",
		value: "11CE0AFE",
		reward: Rewards.AP_BOOST,
		exclude: [RewardType.FORM, RewardType.TORNPAGE, RewardType.SPELL],
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Marluxia)",
		value: "11CE0AAA",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lost Illusion (Larxene)",
		value: "11CE0A9E",
		reward: Rewards.LOST_ILLUSION,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Magic Boost (Data Roxas)",
		value: "11CE0B0A",
		reward: Rewards.MAGIC_BOOST,
		exclude: [RewardType.FORM, RewardType.TORNPAGE, RewardType.SPELL],
	},
];