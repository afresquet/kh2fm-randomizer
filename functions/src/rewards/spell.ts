import { Reward, RewardType } from "./Reward";

export const spellRewards: { [name: string]: Reward } = {
	FIRE: {
		type: RewardType.SPELL,
		name: "Fire",
		value: "0015",
	},
	BLIZZARD: {
		type: RewardType.SPELL,
		name: "Blizzard",
		value: "0016",
	},
	THUNDER: {
		type: RewardType.SPELL,
		name: "Thunder",
		value: "0017",
	},
	CURE: {
		type: RewardType.SPELL,
		name: "Cure",
		value: "0018",
	},
	MAGNET: {
		type: RewardType.SPELL,
		name: "Magnet",
		value: "0057",
	},
	REFLECT: {
		type: RewardType.SPELL,
		name: "Reflect",
		value: "0058",
	},
};
