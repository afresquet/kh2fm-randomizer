import { File } from "../types/File";
import { Patch } from "../types/Patch";

export const skipDragon: Patch = {
	[File.pnach]: `
//Skip Dragon Xemnas
patch=1,EE,E0061612,extended,0032BAE0
patch=1,EE,E0050048,extended,0032BAE4
patch=1,EE,E0040048,extended,0032BAE6
patch=1,EE,E0030048,extended,0032BAE8
patch=1,EE,1032BAE0,extended,00001712
patch=1,EE,2032BAE4,extended,00540054
patch=1,EE,1032BAE8,extended,00000054
`,
	[File.lua]: `
	--Skip Dragon Xemnas
	if ReadShort(Now+0) == 0x1D12 then
		if Platform == 'PS2' then
			WriteInt(0x1C4A648,0x5C)
		elseif Platform == 'PC' then
			WriteInt(0x29DEAD8-0x56450E,0x5C)
		end
	end
`,
};
