import { Configuration } from "../Configuration";
import { createLine } from "../helpers/createLine";
import { levels } from "../levels";
import { LevelStats } from "../LevelStats";

export const randomizeStats = ({ seed }: Configuration) => {
	const levelStats = new LevelStats();

	return levels.reduce((result, level) => {
		levelStats.levelUp(seed);

		return result + createLine(level.stats, levelStats.hexCode);
	}, "");
};
