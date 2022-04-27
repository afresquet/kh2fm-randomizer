import { File } from "../types/File";
import { Patch } from "../types/Patch";

export const fastHyenasTwo: Patch = {
	[File.pnach]: `
//Fast Hyenas II 1
patch=1,EE,E003050A,extended,0032BAE0
patch=1,EE,E0020039,extended,0032BAE8
patch=1,EE,E0010087,extended,01D48EFC
patch=1,EE,11D48EFC,extended,000000EC
//Fast Hyenas II 2
patch=1,EE,E003050A,extended,0032BAE0
patch=1,EE,E0020039,extended,0032BAE8
patch=1,EE,11C4EDB4,extended,00000000
patch=1,EE,11C4EDF4,extended,00000000
`,
	[File.lua]: `
	--Fast Hyenas II
	if ReadShort(Now+0) == 0x050A and ReadShort(Now+8) == 0x39 then
		if Platform == 'PS2' then
			WriteInt(0x1C4EDB4,0)
			WriteInt(0x1C4EDF4,0)
			if ReadInt(0x1D48EFC) == 135 then
				WriteInt(0x1D48EFC,236)
			end
		elseif Platform == 'PC' then
			WriteInt(0x29E32A0-0x56450E,0)
			WriteInt(0x29E32E0-0x56450E,0)
			if ReadInt(0x2A0D108-0x56450E) == 135 then
				WriteInt(0x2A0D108-0x56450E,236)
			end
		end
	end
`,
};
