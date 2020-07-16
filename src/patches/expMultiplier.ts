import { createLine } from "../helpers/createLine";
import { levels } from "../rewardLocations/levels";
import { Configuration } from "../settings/Configuration";
import { Multiplier } from "../settings/enums";

export function* expMultiplier(
	configuration: Configuration
): IterableIterator<string> {
	if (configuration.settings.expMultiplier === Multiplier.ONE) return "";

	const divider = 1 + configuration.settings.expMultiplier * 0.5;

	for (const level of levels) {
		const exp = Math.ceil(level.exp.required / divider);

		yield createLine(level.exp.value, exp.toString(16), false);
	}
}
