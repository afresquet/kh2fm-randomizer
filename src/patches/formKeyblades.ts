import { createLine } from "../helpers/createLine";
import { keybladeAbilitiesRewardLocations } from "../rewardLocations/keyblades";

const fake = keybladeAbilitiesRewardLocations.find(
	location => location.description === "FAKE"
);
const detectionSaber = keybladeAbilitiesRewardLocations.find(
	location => location.description === "Detection Saber"
);
const edgeOfUltima = keybladeAbilitiesRewardLocations.find(
	location => location.description === "Edge of Ultima"
);

export const formKeybladesAbilities = [
	fake,
	detectionSaber,
	edgeOfUltima,
].reduce(
	(result, location) =>
		result + createLine(location!.values.ability, location!.ability.value),
	""
);

export const formKeybladesStats = [
	[fake!.values.stats, "0204"],
	[detectionSaber!.values.stats, "0405"],
	[edgeOfUltima!.values.stats, "0103"],
].reduce((result, [address, stats]) => result + createLine(address, stats), "");
