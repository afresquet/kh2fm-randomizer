import { File } from "../types/File";
import { Patch } from "../types/Patch";

export const shorterDay5: Patch = {
	[File.pnach]: `
//Shorter Day 5
patch=1,EE,E0100B02,extended,0032BAE0
patch=1,EE,E00F0032,extended,0032BAE2
patch=1,EE,E00E0001,extended,0032BAE4
patch=1,EE,E00D0000,extended,0032BAE6
patch=1,EE,E00C000C,extended,0032BAE8
patch=1,EE,1032D80D,extended,000007FF
patch=1,EE,2032BE7A,extended,00020013
patch=1,EE,0032BE80,extended,0000000D
patch=1,EE,2032BE86,extended,00030013
patch=1,EE,0032BE8C,extended,00000001
patch=1,EE,0032BF18,extended,00000003
patch=1,EE,0032BF1C,extended,00000000
patch=1,EE,2032DBB0,extended,CB730000
patch=1,EE,1032DC40,extended,00000000
patch=1,EE,0032DE39,extended,0000007D
patch=1,EE,0032DE3C,extended,00000017
patch=1,EE,0032DEC4,extended,0000001E
`,
	[File.lua]: `
	--Shorter Day 5
	if ReadShort(Now+0) == 0x0B02 and ReadShort(Now+8) == 0x0C then
		WriteShort(Save+0x034C,0x02)
		WriteShort(Save+0x0350,0x0D)
		WriteShort(Save+0x0356,0x13)
		WriteShort(Save+0x0358,0x03)
		WriteShort(Save+0x035C,0x01)
		WriteShort(Save+0x03E8,0x03)
		WriteShort(Save+0x03EC,0x00)
		WriteByte(Save+0x2394,0x1E)
		WriteShort(Save+0x2110,0x00)
		WriteByte(Save+0x1CDD,ReadByte(Save+0x1CDD)|0xC0)
		WriteByte(Save+0x1CDE,ReadByte(Save+0x1CDE)|0x07)
		WriteByte(Save+0x1CEF,ReadByte(Save+0x1CEF)|0x80)
	end
`,
};
