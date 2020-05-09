import { RewardLocationType } from "./RewardLocationType";
import { RewardType } from "./RewardType";

export interface RewardLocation {
	type: RewardLocationType;
	description: string;
	value: string;
	priority?: number;
	exclude?: RewardType[];
}
