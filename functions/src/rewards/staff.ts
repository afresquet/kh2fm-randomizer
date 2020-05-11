import { Reward, RewardType } from "./Reward";

export const staffRewards: { [name: string]: Reward } = {
	RISING_DRAGON: {
		type: RewardType.STAFF,
		name: "Rising Dragon",
		value: "009A",
	},
	METEOR_STAFF: {
		type: RewardType.STAFF,
		name: "Meteor Staff",
		value: "0096",
	},
	CENTURION: {
		type: RewardType.STAFF,
		name: "Centurion",
		value: "0221",
	},
	NOBODY_LANCE: {
		type: RewardType.STAFF,
		name: "Nobody Lance",
		value: "009B",
	},
	SHAMANS_RELIC: {
		type: RewardType.STAFF,
		name: "Shaman's Relic",
		value: "009C",
	},
};
