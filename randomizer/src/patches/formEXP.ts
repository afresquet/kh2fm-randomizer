import { createLine } from "../helpers/createLine";
import { formEXP } from "../miscellaneous/formEXP";
import { Configuration } from "../types/configuration/Configuration";
import { Multiplier } from "../types/configuration/enums";
import { File } from "../types/File";

export const formEXPPatch = (
	configuration: Configuration,
	file: File
): string => {
	const codes: string[] = [
		file === File.pnach
			? "// Form EXP Multipliers\n"
			: "\t--Form EXP Multipliers\n",
	];

	for (const [setting, levels] of [
		[configuration.settings.valorEXP, formEXP.VALOR],
		[configuration.settings.wisdomEXP, formEXP.WISDOM],
		[configuration.settings.limitEXP, formEXP.LIMIT],
		[configuration.settings.masterEXP, formEXP.MASTER],
		[configuration.settings.finalEXP, formEXP.FINAL],
	] as const) {
		if (setting !== Multiplier.ONE) {
			for (const level of levels) {
				const exp = Math.ceil(level.required / (setting + 1));

				codes.push(createLine(level.value, exp.toString(16), file));
			}
		}
	}

	return codes.join("");
};
