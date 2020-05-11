import { RewardType } from "../rewards/Reward";
import { RewardLocationType } from "./RewardLocationType";

export interface RewardLocation {
	type: RewardLocationType;
	description: string;
	value: string;
	priority?: number;
	exclude?: RewardType[];
}
