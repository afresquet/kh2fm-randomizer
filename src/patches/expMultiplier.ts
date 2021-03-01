import { createLine } from "../helpers/createLine";
import { levels } from "../rewardLocations/levels";
import { Configuration } from "../types/configuration/Configuration";
import { Multiplier } from "../types/enums";

const dividers = {
	[Multiplier.TWO]: 1.5,
	[Multiplier.THREE]: 2,
	[Multiplier.FOUR]: 3,
	[Multiplier.FIVE]: 5,
};

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
