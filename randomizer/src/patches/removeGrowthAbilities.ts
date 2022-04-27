import { File } from "../types/File";
import { Patch } from "../types/Patch";

export const removeGrowthAbilities: Patch = {
	[File.pnach]: `
//Remove High Jump LV1
patch=1,EE,E0030102,extended,0032EE26
patch=1,EE,1036E5A2,extended,00000000
patch=1,EE,1032EE2C,extended,0000805E
patch=1,EE,1032EE42,extended,00000000
//Remove High Jump LV2 1
patch=1,EE,E0010102,extended,0032EE26
patch=1,EE,1036E5A4,extended,0000005F
//Remove High Jump LV2 2
patch=1,EE,E0030103,extended,0032EE26
patch=1,EE,1036E5A4,extended,00000000
patch=1,EE,1032EE2C,extended,0000805F
patch=1,EE,1032EE42,extended,00000000
//Remove High Jump LV3 1
patch=1,EE,E0010104,extended,0032EE26
patch=1,EE,1036E5A6,extended,00000060
//Remove High Jump LV3 2
patch=1,EE,E0030105,extended,0032EE26
patch=1,EE,1036E5A6,extended,00000000
patch=1,EE,1032EE2C,extended,00008060
patch=1,EE,1032EE42,extended,00000000
//Remove Quick Run LV1
patch=1,EE,E0030102,extended,0032EE5E
patch=1,EE,1036E5AC,extended,00000000
patch=1,EE,1032EE64,extended,00008062
patch=1,EE,1032EE74,extended,00000000
//Remove Quick Run LV2 1
patch=1,EE,E0010102,extended,0032EE5E
patch=1,EE,1036E5AE,extended,00000063
//Remove Quick Run LV2
patch=1,EE,E0030103,extended,0032EE5E
patch=1,EE,1036E5AE,extended,00000000
patch=1,EE,1032EE64,extended,00008063
patch=1,EE,1032EE74,extended,00000000
//Remove Quick Run LV3 1
patch=1,EE,E0010104,extended,0032EE5E
patch=1,EE,1036E5B0,extended,00000064
//Remove Quick Run LV3 2
patch=1,EE,E0030105,extended,0032EE5E
patch=1,EE,1036E5B0,extended,00000000
patch=1,EE,1032EE64,extended,00008064
patch=1,EE,1032EE74,extended,00000000
//Remove Dodge Roll LV1
patch=1,EE,E0030102,extended,0032EE96
patch=1,EE,1036E5B6,extended,00000000
patch=1,EE,1032EE9C,extended,00008234
patch=1,EE,1032EEC2,extended,00000000
//Remove Dodge Roll LV2 1
patch=1,EE,E0010102,extended,0032EE96
patch=1,EE,1036E5B8,extended,00000235
//Remove Dodge Roll LV2 2
patch=1,EE,E0030103,extended,0032EE96
patch=1,EE,1036E5B8,extended,00000000
patch=1,EE,1032EE9C,extended,00008235
patch=1,EE,1032EEC2,extended,00000000
//Remove Dodge Roll LV3 1
patch=1,EE,E0010104,extended,0032EE96
patch=1,EE,1036E5BA,extended,00000236
//Remove Dodge Roll LV3 2
patch=1,EE,E0030105,extended,0032EE96
patch=1,EE,1036E5BA,extended,00000000
patch=1,EE,1032EE9C,extended,00008236
patch=1,EE,1032EEC2,extended,00000000
//Remove Aerial Dodge LV1
patch=1,EE,E0030102,extended,0032EECE
patch=1,EE,1036E5C0,extended,00000000
patch=1,EE,1032EED4,extended,00008066
patch=1,EE,1032EEEA,extended,00000000
//Remove Aerial Dodge LV2 1
patch=1,EE,E0010102,extended,0032EECE
patch=1,EE,1036E5C2,extended,00000067
//Remove Aerial Dodge LV2 2
patch=1,EE,E0030103,extended,0032EECE
patch=1,EE,1036E5C2,extended,00000000
patch=1,EE,1032EED4,extended,00008067
patch=1,EE,1032EEEA,extended,00000000
//Remove Aerial Dodge LV3 1
patch=1,EE,E0010104,extended,0032EECE
patch=1,EE,1036E5C4,extended,00000068
//Remove Aerial Dodge LV3 2
patch=1,EE,E0030105,extended,0032EECE
patch=1,EE,1036E5C4,extended,00000000
patch=1,EE,1032EED4,extended,00008068
patch=1,EE,1032EEEA,extended,00000000
//Remove Glide LV1
patch=1,EE,E0030102,extended,0032EF06
patch=1,EE,1036E5CA,extended,00000000
patch=1,EE,1032EF0C,extended,0000806A
patch=1,EE,1032EF1E,extended,00000000
//Remove Glide LV2 1
patch=1,EE,E0010102,extended,0032EF06
patch=1,EE,1036E5CC,extended,0000006B
//Remove Glide LV2 2
patch=1,EE,E0030103,extended,0032EF06
patch=1,EE,1036E5CC,extended,00000000
patch=1,EE,1032EF0C,extended,0000806B
patch=1,EE,1032EF1E,extended,00000000
//Remove Glide LV3 1
patch=1,EE,E0010104,extended,0032EF06
patch=1,EE,1036E5CE,extended,0000006C
//Remove Glide LV3 2
patch=1,EE,E0030105,extended,0032EF06
patch=1,EE,1036E5CE,extended,00000000
patch=1,EE,1032EF0C,extended,0000806C
patch=1,EE,1032EF1E,extended,00000000
`,
	[File.lua]: new Array(35).fill(0).reduce((acc, _, i) => {
		const address = (0x344a5 + 8 * i).toString(16).toUpperCase();
		return acc + `	WriteByte(Btl0 + 0x${address}, 0x00000000)\n`;
	}, "--Remove Growth Abilities\n"),
};

export const removeMaxGrowthAbilities: Patch = {
	[File.pnach]: ` 
//Remove High Jump MAX 1
patch=1,EE,E0010106,extended,0032EE26
patch=1,EE,1036E5A8,extended,00000061
//Remove High Jump MAX 2
patch=1,EE,E0020107,extended,0032EE26
patch=1,EE,1032EE2C,extended,00008061
patch=1,EE,1032EE42,extended,00000000
//Remove Quick Run MAX 1
patch=1,EE,E0010106,extended,0032EE5E
patch=1,EE,1036E5B2,extended,00000065
//Remove Quick Run MAX 2
patch=1,EE,E0020107,extended,0032EE5E
patch=1,EE,1032EE64,extended,00008065
patch=1,EE,1032EE74,extended,00000000
//Remove Dodge Roll MAX 1
patch=1,EE,E0010106,extended,0032EE96
patch=1,EE,1036E5BC,extended,00000237
//Remove Dodge Roll MAX 2
patch=1,EE,E0020107,extended,0032EE96
patch=1,EE,1032EE9C,extended,00008237
patch=1,EE,1032EEC2,extended,00000000
//Remove Aerial Dodge MAX 1
patch=1,EE,E0010106,extended,0032EECE
patch=1,EE,1036E5C6,extended,00000069
//Remove Aerial Dodge MAX 2
patch=1,EE,E0020107,extended,0032EECE
patch=1,EE,1032EED4,extended,00008069
patch=1,EE,1032EEEA,extended,00000000
//Remove Glide LV2 1
patch=1,EE,E0010106,extended,0032EF06
patch=1,EE,1036E5D0,extended,0000006D
//Remove Glide MAX 2
patch=1,EE,E0020107,extended,0032EF06
patch=1,EE,1032EF0C,extended,0000806D
patch=1,EE,1032EF1E,extended,00000000
`,
	[File.lua]: `
	ValorLv = ReadByte(Save+0x32F6)
	if ValorLv == 1 or ValorLv == 2 then
		WriteShort(Save+0x32FC,0x805E)
	elseif ValorLv == 3 or ValorLv == 4 then
		WriteShort(Save+0x32FC,0x805F)
	elseif ValorLv == 5 or ValorLv == 6 then
		WriteShort(Save+0x32FC,0x8060)
	elseif ValorLv == 7 then
		WriteShort(Save+0x32FC,0x8061)
	end

	WisdmLv = ReadByte(Save+0x332E)
	if WisdmLv == 1 or WisdmLv == 2 then
		WriteShort(Save+0x3334,0x8062)
	elseif WisdmLv == 3 or WisdmLv == 4 then
		WriteShort(Save+0x3334,0x8063)
	elseif WisdmLv == 5 or WisdmLv == 6 then
		WriteShort(Save+0x3334,0x8064)
	elseif WisdmLv == 7 then
		WriteShort(Save+0x3334,0x8065)
	end

	LimitLv = ReadByte(Save+0x3366)
	if LimitLv == 1 or LimitLv == 2 then
		WriteShort(Save+0x336C,0x8234)
	elseif LimitLv == 3 or LimitLv == 4 then
		WriteShort(Save+0x336C,0x8235)
	elseif LimitLv == 5 or LimitLv == 6 then
		WriteShort(Save+0x336C,0x8236)
	elseif LimitLv == 7 then
		WriteShort(Save+0x336C,0x8237)
	end

	MastrLv = ReadByte(Save+0x339E)
	if MastrLv == 1 or MastrLv == 2 then
		WriteShort(Save+0x33A4,0x8066)
	elseif MastrLv == 3 or MastrLv == 4 then
		WriteShort(Save+0x33A4,0x8067)
	elseif MastrLv == 5 or MastrLv == 6 then
		WriteShort(Save+0x33A4,0x8068)
	elseif MastrLv == 7 then
		WriteShort(Save+0x33A4,0x8069)
	end

	FinalLv = ReadByte(Save+0x33D6)
	if FinalLv == 1 or FinalLv == 2 then
		WriteShort(Save+0x33DC,0x806A)
	elseif FinalLv == 3 or FinalLv == 4 then
		WriteShort(Save+0x33DC,0x806B)
	elseif FinalLv == 5 or FinalLv == 6 then
		WriteShort(Save+0x33DC,0x806C)
	elseif FinalLv == 7 then
		WriteShort(Save+0x33DC,0x806D)
	end
`,
};