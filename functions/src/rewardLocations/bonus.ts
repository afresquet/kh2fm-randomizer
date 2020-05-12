import { GameMode } from "../Configuration";
import { Rewards } from "../rewards";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

export const bonusRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.BONUS,
		description: "Station of Serenity Dusks",
		value: "21D10FA8",
		reward: Rewards.AERIAL_RECOVERY,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Twilight Thorn",
		value: "21D10CB8",
		reward: Rewards.GUARD,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Axel 1",
		value: "21D11278",
		reward: Rewards.SCAN,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Bailey Nobodies",
		value: "21D10E98",
		reward: Rewards.FIRE,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Village Cave Heartless",
		value: "21D10DF8",
		reward: Rewards.SLIDE_DASH,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Shan-Yu",
		value: "21D108C8",
		reward: Rewards.AERIAL_SWEEP,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Thresholder",
		value: "21D10758",
		reward: Rewards.UPPER_SLASH,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Dark Thorn",
		value: "21D10788",
		reward: Rewards.RETALIATING_SLASH,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Cerberus",
		value: "21D10808",
		reward: Rewards.COUNTERGUARD,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Phil's Training (Maniac)",
		value: "21D10FE8",
		reward: Rewards.AERIAL_DIVE,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Pete (Olympus Coliseum)",
		value: "21D10828",
		reward: Rewards.TRINITY_LIMIT,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Hydra",
		value: "21D10858",
		reward: Rewards.THUNDER,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Queen Minnie Escort",
		value: "21D10D28",
		reward: Rewards.AUTO_SUMMON,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Pete (Steamboat Fight)",
		value: "21D10988",
		reward: Rewards.DODGE_SLASH,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Pete (Timeless River)",
		value: "21D109B8",
		reward: Rewards.REFLECT,
	},
	{
		type: RewardLocationType.BONUS,
		description: "The Interceptor Medallion Fight",
		value: "21D110B8",
		reward: Rewards.AERIAL_SPIRAL,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Captain Barbossa",
		value: "21D10AA8",
		reward: Rewards.AERIAL_FINISH,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Abu Escort",
		value: "21D10DB8",
		reward: Rewards.SUMMON_BOOST,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Volcanic Lord & Blizzard Lord",
		value: "21D10CE8",
		reward: Rewards.FINISHING_LEAP,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Prison Keeper",
		value: "21D109E8",
		reward: Rewards.FLASH_STEP,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Hostile Program",
		value: "21D10C38",
		reward: Rewards.VICINITY_BREAK,
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
		type: RewardLocationType.BONUS,
		description: "Storm Rider",
		value: "21D10908",
		reward: Rewards.THUNDER,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Xaldin",
		value: "21D107C8",
		reward: Rewards.REFLECT,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Hades",
		value: "21D10888",
		reward: Rewards.MAGNET_BURST,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Grim Reaper 1",
		value: "21D11028",
		reward: Rewards.HORIZONTAL_SLASH,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Grim Reaper 2",
		value: "21D10AE8",
		reward: Rewards.MAGNET,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Genie Jafar",
		value: "21D10978",
		reward: Rewards.FIRE,
		gameMode: {
			[GameMode.GOA_MOD]: {
				0: {
					exclude: [Rewards.FIRE, Rewards.BLIZZARD, Rewards.THUNDER],
				},
			},
		},
	},
	{
		type: RewardLocationType.BONUS,
		description: "Groundshaker",
		value: "21D10C18",
		reward: Rewards.THUNDER,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Solar Sailer Heartless",
		value: "21D11078",
		reward: Rewards.EXPLOSION,
	},
	{
		type: RewardLocationType.BONUS,
		description: "MCP",
		value: "21D10C78",
		reward: Rewards.REFLECT,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Betwixt and Between Nobodies",
		value: "21D110E8",
		reward: Rewards.SLAPSHOT,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Roxas",
		value: "21D111E8",
		reward: Rewards.COMBO_MASTER,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Luxord",
		value: "21D10B58",
		reward: Rewards.MAGNET,
	},
];
