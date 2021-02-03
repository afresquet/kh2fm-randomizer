import { RewardType } from "../types/Reward";

export const bonusRewards = {
	HP_UP: {
		type: RewardType.BONUS_MODIFIER,
		name: "HP Up",
		value: "05",
	},
	MP_UP: {
		type: RewardType.BONUS_MODIFIER,
		name: "MP Up",
		value: "0A",
	},
	ARMOR_UP: {
		type: RewardType.BONUS_MODIFIER,
		name: "Armor Slot Up",
		value: "01",
	},
	ACCESSORY_UP: {
		type: RewardType.BONUS_MODIFIER,
		name: "Accessory Slot Up",
		value: "01",
	},
	ITEM_UP: {
		type: RewardType.BONUS_MODIFIER,
		name: "Item Slot Up",
		value: "01",
	},
	DRIVE_UP: {
		type: RewardType.BONUS_MODIFIER,
		name: "Drive Gauge Up",
		value: "01",
	},
};
