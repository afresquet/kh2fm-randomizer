import { SeedArray } from "../SeedArray";
import { createLine } from "./createLine";

export const createPnach = (seed: SeedArray) => {
	return seed.reduce((result, item) => {
		return result + createLine(item.location.value, item.reward.value);
	}, "");
};
