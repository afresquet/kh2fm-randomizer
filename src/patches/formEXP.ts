import { createLine } from "../helpers/createLine";
import { formEXP } from "../miscellaneous/formEXP";
import { Configuration } from "../settings/Configuration";
import { FormEXP } from "../settings/enums";

export const formEXPPatch = (configuration: Configuration): string => {
	const codes: string[] = [];

	if (configuration.settings.valorEXP !== FormEXP.ONE) {
		for (const level of formEXP.VALOR) {
			const exp = Math.ceil(
				level.required / (configuration.settings.valorEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	if (configuration.settings.wisdomEXP !== FormEXP.ONE) {
		for (const level of formEXP.WISDOM) {
			const exp = Math.ceil(
				level.required / (configuration.settings.wisdomEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	if (configuration.settings.limitEXP !== FormEXP.ONE) {
		for (const level of formEXP.LIMIT) {
			const exp = Math.ceil(
				level.required / (configuration.settings.limitEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	if (configuration.settings.masterEXP !== FormEXP.ONE) {
		for (const level of formEXP.MASTER) {
			const exp = Math.ceil(
				level.required / (configuration.settings.masterEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	if (configuration.settings.finalEXP !== FormEXP.ONE) {
		for (const level of formEXP.FINAL) {
			const exp = Math.ceil(
				level.required / (configuration.settings.finalEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	return codes.join("");
};
