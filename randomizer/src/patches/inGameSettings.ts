import { createLine } from "../helpers/createLine";
import { Configuration } from "../types/configuration/Configuration";
import { Toggle } from "../types/configuration/enums";

export const inGameSettings = (configuration: Configuration): string => {
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

	return (
		createLine("E0042002", "0032BAE0") +
		createLine("E0030001", "0032BAE4") +
		createLine("E0020001", "0032BAE6") +
		createLine("E0010001", "0032BAE8") +
		createLine(
			"1032FCD4",
			`${left.toString(16).toUpperCase().padStart(2, "0")}${right
				.toString(16)
				.toUpperCase()
				.padStart(2, "0")}`
		)
	);
};
