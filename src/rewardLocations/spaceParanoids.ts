import { Rewards } from "../rewards";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

export const spaceParanoidsRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.BIGCHEST,
		description: "Space Paranoids (Pit Cell)",
		value: "11CDFCEE",
		reward: Rewards.PIT_CELL_AREA_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Space Paranoids (Pit Cell)",
		value: "11CDFCFA",
		reward: Rewards.MYTHRIL_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Space Paranoids (Canyon)",
		value: "11CDFD06",
		reward: Rewards.DARK_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Space Paranoids (Canyon)",
		value: "11CDFD12",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Space Paranoids (Canyon)",
		value: "11CDFD1E",
		reward: Rewards.MYTHRIL_GEM,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Space Paranoids (Canyon)",
		value: "11CDFD2A",
		reward: Rewards.FROST_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Space Paranoids (Hallway)",
		value: "11CDFD36",
		reward: Rewards.POWER_CRYSTAL,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Space Paranoids (Hallway)",
		value: "11CDFD42",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Space Paranoids (Communications Room)",
		value: "11CDFD4E",
		reward: Rewards.IO_TOWER_MAP,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Space Paranoids (Communications Room)",
		value: "11CDFD5A",
		reward: Rewards.GAIA_BELT,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Space Paranoids (Central Computer Core)",
		value: "11CDFD66",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Space Paranoids (Central Computer Core)",
		value: "11CDFD72",
		reward: Rewards.ORICHALCUM_PLUS,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Space Paranoids (Central Computer Core)",
		value: "11CDFD7E",
		reward: Rewards.COSMIC_ARTS,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Space Paranoids (Central Computer Core)",
		value: "11CDFD8A",
		reward: Rewards.CENTRAL_COMPUTER_CORE_MAP,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Hostile Program",
		value: "21D10C38",
		reward: Rewards.VICINITY_BREAK,
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
		type: RewardLocationType.POPUP,
		description: "Photon Debugger",
		value: "11CE0816",
		reward: Rewards.PHOTON_DEBUGGER,
	},
];
