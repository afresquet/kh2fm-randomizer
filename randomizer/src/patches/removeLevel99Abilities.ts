import { createLine } from "../helpers/createLine";
import { level50delete, levels } from "../rewardLocations/levels";
import { File } from "../types/File";
import { Patch } from "../types/Patch";

const lines = (file: File) =>
	level50delete.reduce((result, levelToDelete) => {
		const level = levels.find(level => level.level === levelToDelete)!;

		const line = [
			level.abilities.sword.value,
			level.abilities.staff.value,
			level.abilities.shield.value,
		].reduce(
			(acc, current) => `${acc}${createLine(current, "00000000", file)}`,
			""
		);

		return `${result}${line}`;
	}, "");

export const removeLevel99Abilities: Patch = {
	[File.pnach]: lines(File.pnach),
	[File.lua]: lines(File.lua),
};
