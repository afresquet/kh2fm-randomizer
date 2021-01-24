import { createLine } from "../helpers/createLine";
import { levels } from "../rewardLocations/levels";
import { Configuration } from "../types/configuration/Configuration";
import { Multiplier } from "../types/configuration/enums";

const dividers = [1, 1.5, 2, 3, 5];

export function* expMultiplier(
	configuration: Configuration
): IterableIterator<string> {
	if (configuration.settings.expMultiplier === Multiplier.ONE) return "";

	const divider = dividers[configuration.settings.expMultiplier];

	for (const level of levels) {
		const exp = Math.ceil(level.exp.required / divider);

		yield createLine(level.exp.value, exp.toString(16), false);
	}
}
