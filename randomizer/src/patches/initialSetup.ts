import { File } from "../types/File";

export const initialSetup: (name: string, file: File) => string = (
	name,
	file
) => {
	if (file === File.pnach) {
		return `// ${name}`;
	}

	return `
-- ${name}

function _OnInit()
	if GAME_ID == 0xF266B00B or GAME_ID == 0xFAF99301 then
		Platform = 'PS2'
		Now  = 0x032BAE0
		Save = 0x032BB30
		Sys3 = 0x1CCB300
		Btl0 = 0x1CE5D80
	elseif ENGINE_TYPE == 'BACKEND' then
		Platform = 'PC'
		Now  = 0x0714DB8 - 0x56454E
		Save = 0x09A7070 - 0x56450E
		Sys3 = 0x2A59DB0 - 0x56450E
		Btl0 = 0x2A74840 - 0x56450E
	end
end

function _OnFrame()`;
};
