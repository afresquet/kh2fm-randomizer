import { createLine } from "../helpers/createLine";
import { Configuration } from "../types/configuration/Configuration";
import { Toggle } from "../types/configuration/enums";
import { File } from "../types/File";

export const inGameSettings = (
	configuration: Configuration,
	file: File
): string => {
	let left = 4;
	let right = 11;

	if (configuration.gameMode.goa.fieldCamera === Toggle.ON) {
		right += 16;
	}

	if (configuration.gameMode.goa.cameraUpDown === Toggle.ON) {
		left += 1;
	}

	if (configuration.gameMode.goa.cameraLeftRight === Toggle.ON) {
		right += 128;
	}

	if (configuration.gameMode.goa.summonEffects === Toggle.ON) {
		left -= 4;
	}

	const value = `${left.toString(16).toUpperCase().padStart(2, "0")}${right
		.toString(16)
		.toUpperCase()
		.padStart(2, "0")}`;

	if (file === File.lua) {
		return `
	-- In Game Settings
	if ReadShort(Now+0) == 0x2002 and ReadShort(Now+8) == 0x01 then
		WriteShort(Save+0x041A4,0x${value.substring(value.length - 3)})
	end
`;
	}

	return (
		"// In Game Settings\n" +
		createLine("E0042002", "0032BAE0", file) +
		createLine("E0030001", "0032BAE4", file) +
		createLine("E0020001", "0032BAE6", file) +
		createLine("E0010001", "0032BAE8", file) +
		createLine("1032FCD4", value, file)
	);
};
