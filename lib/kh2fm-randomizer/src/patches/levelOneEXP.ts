import { createLine } from "../helpers/createLine";
import { levels } from "../rewardLocations/levels";

export const levelOneEXP = createLine(
	levels[0].exp.value,
	levels[levels.length - 1].exp.required.toString(16),
	false
);
