import { createLine } from "../helpers/createLine";
import { keybladeAbilitiesRewardLocations } from "../rewardLocations/keyblades";

const fake = keybladeAbilitiesRewardLocations.find(
	location => location.description === "FAKE"
)!;
const detectionSaber = keybladeAbilitiesRewardLocations.find(
	location => location.description === "Detection Saber"
)!;
const edgeOfUltima = keybladeAbilitiesRewardLocations.find(
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
	[fake.values.stats, 4, 2],
	[detectionSaber.values.stats, 5, 4],
	[edgeOfUltima.values.stats, 3, 1],
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
