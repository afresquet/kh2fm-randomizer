import { Reward } from "./Reward";
import { RewardType } from "./RewardType";

export const armorRewards: { [name: string]: Reward } = {
	PROTECT_BELT: {
		type: RewardType.ARMOR,
		name: "Protect Belt",
		value: "004E",
	},
	BLIZZAGA_ARMLET: {
		type: RewardType.ARMOR,
		name: "Blizzaga Armlet",
		value: "0120",
	},
	THUNDAGA_TRINKET: {
		type: RewardType.ARMOR,
		name: "Thundaga Trinket",
		value: "0125",
	},
	FIRAGA_BANGLE: {
		type: RewardType.ARMOR,
		name: "Firaga Bangle",
		value: "00C5",
	},
	COSMIC_CHAIN: {
		type: RewardType.ARMOR,
		name: "Cosmic Chain",
		value: "0134",
	},
	AEGIS_CHAIN: {
		type: RewardType.ARMOR,
		name: "Aegis Chain",
		value: "012E",
	},
	FIRE_BANGLE: {
		type: RewardType.ARMOR,
		name: "Fire Bangle",
		value: "00AD",
	},
	BLIZZARD_ARMLET: {
		type: RewardType.ARMOR,
		name: "Blizzard Armlet",
		value: "011E",
	},
	THUNDER_TRINKET: {
		type: RewardType.ARMOR,
		name: "Thunder Trinket",
		value: "0123",
	},
	ELVEN_BANDANA: {
		type: RewardType.ARMOR,
		name: "Elven Bandana",
		value: "0043",
	},
	GAIA_BELT: {
		type: RewardType.ARMOR,
		name: "Gaia Belt",
		value: "004F",
	},
	CHAMPION_BELT: {
		type: RewardType.ARMOR,
		name: "Champion Belt",
		value: "0131",
	},
	COSMIC_BELT: {
		type: RewardType.ARMOR,
		name: "Cosmic Belt",
		value: "006F",
	},
};
