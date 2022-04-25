import { createLine } from "../helpers/createLine";
import { keybladeRewardLocations } from "../rewardLocations/keyblades";

const fake = keybladeRewardLocations.find(
	location => location.description === "FAKE"
)!;
const detectionSaber = keybladeRewardLocations.find(
	location => location.description === "Detection Saber"
)!;
const edgeOfUltima = keybladeRewardLocations.find(
	location => location.description === "Edge of Ultima"
)!;

export const formKeybladesAbilities = [
	fake,
	detectionSaber,
	edgeOfUltima,
].reduce(
	(result, location) =>
		result + createLine(location.values.ability, location.ability.value),
	""
);

export const formKeybladesStats = ([
	[fake.values.stats, ...fake.stats],
	[detectionSaber.values.stats, ...detectionSaber.stats],
	[edgeOfUltima.values.stats, ...edgeOfUltima.stats],
] as [string, number, number][]).reduce(
	(result, [address, strength, magic]) =>
		result +
		createLine(
			address,
			magic.toString(16).padStart(2, "0").toUpperCase() +
				strength.toString(16).padStart(2, "0").toUpperCase()
		),
	""
);
