import { createLine } from "../helpers/createLine";
import { levels } from "../rewardLocations/levels";
import { File } from "../types/File";
import { Patch } from "../types/Patch";

const line = (file: File) =>
	createLine(
		levels[0].exp.value,
		levels[levels.length - 1].exp.required.toString(16),
		file,
		false
	);

export const levelOneEXP: Patch = {
	[File.pnach]: `
// Level One EXP
${line(File.pnach)}
`,
	[File.lua]: `
	--Level One EXP
${line(File.lua)}
`,
};
