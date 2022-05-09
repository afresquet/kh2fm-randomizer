import { createLine } from "../helpers/createLine";
import { File } from "../types/File";
import { Patch } from "../types/Patch";

const line = (file: File) => createLine("01D16E55", "00000032", file);

export const startingAP: Patch = {
	[File.pnach]: `
// Starting AP
${line(File.pnach)}
`,
	[File.lua]: `
	--Starting AP
${line(File.lua)}
`,
};
