import { Reward, RewardType } from "./Reward";

export const limitRewards: { [name: string]: Reward } = {
	TRINITY_LIMIT: {
		type: RewardType.LIMIT,
		name: "Trinity Limit",
		value: "00C6",
	},
	GOOFY_TORNADO_FUSION: {
		type: RewardType.LIMIT,
		name: "Tornado Fusion (Whirli-Goof)",
		value: "00C9",
	},
	GOOFY_TEAMWORK: {
		type: RewardType.LIMIT,
		name: "Teamwork (Knocksmash)",
		value: "00CA",
	},
	DONALD_FANTASIA: {
		type: RewardType.LIMIT,
		name: "Fantasia (Comet)",
		value: "00C7",
	},
	DONALD_FLARE_FORCE: {
		type: RewardType.LIMIT,
		name: "Flare Force (Duck Flare)",
		value: "00C8",
	},
};
