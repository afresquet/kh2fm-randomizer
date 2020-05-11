import { Reward } from "./Reward";
import { RewardType } from "./RewardType";

export const recipeRewards: { [name: string]: Reward } = {
	ROAD_TO_DISCOVERY: {
		type: RewardType.RECIPE,
		name: "Road to Discovery",
		value: "01D0",
	},
	STRENGTH_BEYOND_STRENGTH: {
		type: RewardType.RECIPE,
		name: "Strength Beyond Strength",
		value: "01D1",
	},
	BOOK_OF_SHADOWS: {
		type: RewardType.RECIPE,
		name: "Book of Shadows",
		value: "01D2",
	},
	CLOAKED_THUNDER: {
		type: RewardType.RECIPE,
		name: "Cloaked Thunder",
		value: "01D3",
	},
	ETERNAL_BLOSSOM: {
		type: RewardType.RECIPE,
		name: "Eternal Blossom",
		value: "01D4",
	},
	MEGA_RECIPE: {
		type: RewardType.RECIPE,
		name: "Mega-Recipe",
		value: "017E",
	},
	STAR_RECIPE: {
		type: RewardType.RECIPE,
		name: "Star Recipe",
		value: "01C1",
	},
	SKILL_RECIPE: {
		type: RewardType.RECIPE,
		name: "Skill Recipe",
		value: "01C1",
	},
	MOON_RECIPE: {
		type: RewardType.RECIPE,
		name: "Moon Recipe",
		value: "01DC",
	},
	RECOVERY_RECIPE: {
		type: RewardType.RECIPE,
		name: "Recovery Recipe",
		value: "01C2",
	},
	QUEEN_RECIPE: {
		type: RewardType.RECIPE,
		name: "Queen Recipe",
		value: "01DD",
	},
	GUARD_RECIPE: {
		type: RewardType.RECIPE,
		name: "Guard Recipe",
		value: "01C3",
	},
	STYLE_RECIPE: {
		type: RewardType.RECIPE,
		name: "Style Recipe",
		value: "01DB",
	},
	KING_RECIPE: {
		type: RewardType.RECIPE,
		name: "King Recipe",
		value: "01DE",
	},
	ULTIMATE_RECIPE: {
		type: RewardType.ITEM,
		name: "Ultimate Recipe",
		value: "01DF",
	},
};
