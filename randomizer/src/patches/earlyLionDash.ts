import { File } from "../types/File";
import { Patch } from "../types/Patch";

export const earlyLionDash: Patch = {
	[File.pnach]: `
// Start with Dash (Lion Sora)
patch=1,EE,1032EF8C,extended,0000820E
patch=1,EE,E001820E,extended,0032EF8E
patch=1,EE,1032EF8E,extended,00000000
`,
	[File.lua]: "",
};
