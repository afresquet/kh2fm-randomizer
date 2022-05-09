import { createLine } from "../helpers/createLine";
import { keybladeRewardLocations } from "../rewardLocations/keyblades";
import { File } from "../types/File";
import { Patch } from "../types/Patch";

const fake = keybladeRewardLocations.find(
	location => location.description === "FAKE"
)!;
const detectionSaber = keybladeRewardLocations.find(
	location => location.description === "Detection Saber"
)!;
const edgeOfUltima = keybladeRewardLocations.find(
	location => location.description === "Edge of Ultima"
)!;

const formKeybladesAbilitiesLines = (file: File) =>
	[fake, detectionSaber, edgeOfUltima].reduce(
		(result, location) =>
			result +
			createLine(location.values.ability, location.ability.value, file),
		file === File.pnach
			? "// Form Keyblade Abilities\n"
			: "\t--Form Keyblade Abilities\n"
	);

export const formKeybladesAbilities: Patch = {
	[File.pnach]: formKeybladesAbilitiesLines(File.pnach),
	[File.lua]: formKeybladesAbilitiesLines(File.lua),
};

const formKeybladesStatsLines = (file: File) =>
	(
		[
			[fake.values.stats, ...fake.stats],
			[detectionSaber.values.stats, ...detectionSaber.stats],
			[edgeOfUltima.values.stats, ...edgeOfUltima.stats],
		] as [string, number, number][]
	).reduce(
		(result, [address, strength, magic]) =>
			result +
			createLine(
				address,
				magic.toString(16).padStart(2, "0").toUpperCase() +
					strength.toString(16).padStart(2, "0").toUpperCase(),
				file
			),
		file === File.pnach
			? "// Form Keyblade Stats\n"
			: "\t--Form Keyblade Stats\n"
	);

export const formKeybladesStats: Patch = {
	[File.pnach]: formKeybladesStatsLines(File.pnach),
	[File.lua]: formKeybladesStatsLines(File.lua),
};
