import * as functions from "firebase-functions";
import { createLine } from "./helpers/createLine";
import { levels } from "./levels";
import { LevelStats } from "./LevelStats";
import { rewardLocations } from "./rewardLocations";
import { rewards as originalRewards } from "./rewards";

export const randomizer = functions.https.onRequest(async (_, res) => {
	const content = [];

	const rewards = originalRewards.slice();
	const randomizedLocations = rewardLocations
		.map(location => {
			const randomIndex = Math.floor(Math.random() * rewards.length);
			const reward = rewards.splice(randomIndex, 1)[0];

			return { location, reward };
		})
		.reduce((result, random) => {
			return result + createLine(random.location.value, random.reward.value);
		}, "");
	content.push(randomizedLocations);

	const levelStats = new LevelStats();
	const randomizedStats = levels.reduce((result, level) => {
		levelStats.levelUp();

		return result + createLine(level.stats, levelStats.hexCode);
	}, "");
	content.push(randomizedStats);

	res.set({ "Content-Disposition": 'attachment; filename="F266B00B.pnach"' });
	res.send(content.join("\n"));
});
