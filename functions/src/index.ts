import * as functions from "firebase-functions";
import { createLine } from "./helpers/createLine";
import { levels } from "./levels";
import { LevelStats } from "./LevelStats";

export const randomizer = functions.https.onRequest(async (_, res) => {
	const content = [];

	const levelStats = new LevelStats();
	const randomizedStats = levels.reduce((result, level) => {
		levelStats.levelUp();

		return result + createLine(level.stats, levelStats.hexCode);
	}, "");
	content.push(randomizedStats);

	res.set({ "Content-Disposition": 'attachment; filename="F266B00B.pnach"' });
	res.send(content.join("\n"));
});
