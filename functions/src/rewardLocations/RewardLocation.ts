import { RewardType } from "../rewards/RewardType";
import { RewardLocationType } from "./RewardLocationType";

export interface RewardLocation {
	type: RewardLocationType;
	description: string;
	value: string;
	priority?: number;
	exclude?: RewardType[];
}
