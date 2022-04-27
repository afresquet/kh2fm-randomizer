import { File } from "../types/File";
import { Patch } from "../types/Patch";

export const earlyLionDash: Patch = {
	[File.pnach]: `
// Start with Dash (Lion Sora)
patch=1,EE,1032EF8C,extended,0000820E
patch=1,EE,E001820E,extended,0032EF8E
patch=1,EE,1032EF8E,extended,00000000
`,
	[File.lua]: `
	--Start with Dash
	WriteShort(Btl0+0x31A6C,0x0000820E)
	if ReadShort(Now+0) == 0x030A then
		if Platform == 'PS2' then
			WriteShort(0x1C567C4,0x1E)
			WriteShort(0x1C567C8,0x00)
			if ReadShort(Now+8) == 0x3E then
				WriteByte(0x035DE08,1)
			end
		elseif Platform == 'PC' then
			WriteShort(0x29EACA4-0x56450E,0x1E)
			WriteShort(0x29EACA8-0x56450E,0x00)
			if ReadShort(Now+8) == 0x3E then WriteByte(0x0B6275C-0x56450E,1) end
		end
	end
`,
};
