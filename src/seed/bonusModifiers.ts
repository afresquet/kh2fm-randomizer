import seedrandom from "seedrandom";
import { createLine } from "../helpers/createLine";
import { shuffle } from "../helpers/shuffle";
import {
	BonusModifier,
	bonusModifiersRewardLocations,
} from "../rewardLocations/bonusModifiers";
import { Configuration } from "../settings/Configuration";

const hex = (number: number, length: number = 2): string =>
	number.toString(16).padStart(length, "0");

export const bonusModifiers = (configuration: Configuration): string => {
	const upgrades = [
		...shuffle(
			bonusModifiersRewardLocations.reduce<BonusModifier[]>(
				(acc, location) => acc.concat(location.bonuses),
				[]
			)
		),
	];

	let result = "";

	for (const location of bonusModifiersRewardLocations) {
		const values = {
			[BonusModifier.HP]: 0,
			[BonusModifier.MP]: 0,
			[BonusModifier.DRIVE]: 0,
			[BonusModifier.ACCESSORY]: 0,
			[BonusModifier.ARMOR]: 0,
			[BonusModifier.ITEM]: 0,
		};

		for (let i = 0; i < location.bonuses.length; i++) {
			const seeder = seedrandom(
				configuration.name + location.values.stats + location.values.slots + i
			);
			const index = Math.floor(seeder() * upgrades.length);
			const bonus = upgrades.splice(index, 1)[0];

			values[bonus] += 1;
		}

		result += createLine(
			location.values.stats,
			`${hex(values[BonusModifier.MP])}${hex(values[BonusModifier.HP])}`
		);
		result += createLine(
			location.values.slots,
			`${hex(values[BonusModifier.ARMOR])}${hex(
				values[BonusModifier.ACCESSORY]
			)}${hex(values[BonusModifier.ITEM])}${hex(values[BonusModifier.DRIVE])}`
		);
	}

	return result;
};
