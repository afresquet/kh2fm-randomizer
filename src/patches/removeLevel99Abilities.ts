import { level50delete, levels } from "../rewardLocations/levels";

export const removeLevel99Abilities = level50delete.reduce(
	(patch, levelToDelete) => {
		const level = levels.find(level => level.level === levelToDelete)!;

		const line = [
			level.abilities.sword.value,
			level.abilities.staff.value,
			level.abilities.shield.value,
		].reduce(
			(previous, current) =>
				`${previous}patch=1,EE,${current},extended,00000000\n`,
			""
		);

		return `${patch}${line}`;
	},
	""
);
