import { createLine } from "../helpers/createLine";
import { formEXP } from "../miscellaneous/formEXP";
import { Configuration } from "../settings/Configuration";
import { FormEXP } from "../settings/enums";

export const formEXPPatch = (configuration: Configuration): string => {
	const codes: string[] = [];

	if (configuration.experimental.valorEXP !== FormEXP.ONE) {
		for (const level of formEXP.VALOR) {
			const exp = Math.ceil(
				level.required / (configuration.experimental.valorEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	if (configuration.experimental.wisdomEXP !== FormEXP.ONE) {
		for (const level of formEXP.WISDOM) {
			const exp = Math.ceil(
				level.required / (configuration.experimental.wisdomEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	if (configuration.experimental.limitEXP !== FormEXP.ONE) {
		for (const level of formEXP.LIMIT) {
			const exp = Math.ceil(
				level.required / (configuration.experimental.limitEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	if (configuration.experimental.masterEXP !== FormEXP.ONE) {
		for (const level of formEXP.MASTER) {
			const exp = Math.ceil(
				level.required / (configuration.experimental.masterEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	if (configuration.experimental.finalEXP !== FormEXP.ONE) {
		for (const level of formEXP.FINAL) {
			const exp = Math.ceil(
				level.required / (configuration.experimental.finalEXP + 1)
			);
			const hex = exp.toString(16);

			codes.push(createLine(level.value, hex));
		}
	}

	return codes.join("");
};
