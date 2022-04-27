import { File } from "../types/File";
import { Patch } from "../types/Patch";

export const fasterPresents: Patch = {
	[File.pnach]: `
//Fast Gift Wrapping
patch=1,EE,11CA2E78,extended,00004C58
patch=1,EE,21CA2E98,extended,6D2E4C58
patch=1,EE,21CA2E9C,extended,00746573
patch=1,EE,11CA2ED8,extended,00004C58
patch=1,EE,21CA2EF8,extended,6D2E4C58
patch=1,EE,21CA2EFC,extended,00746573
patch=1,EE,11CA2F38,extended,00004C58
patch=1,EE,21CA2F58,extended,6D2E4C58
patch=1,EE,21CA2F5C,extended,00746573
`,
	[File.lua]: `
	--Fast Gift Wrapping
	if Platform == 'PS2' then
		Obj0 = 0x1C94100
	elseif Platform == 'PC' then
		Obj0 = 0x2A22B90 - 0x56450E
	end
	WriteString(Obj0+0xED70,'F_NM170_XL')
	WriteString(Obj0+0xED90,'F_NM170_XL.mset')
	WriteString(Obj0+0xEDD0,'F_NM170_XL')
	WriteString(Obj0+0xEDF0,'F_NM170_XL.mset')
	WriteString(Obj0+0xEE30,'F_NM170_XL')
	WriteString(Obj0+0xEE50,'F_NM170_XL.mset')
`,
};
