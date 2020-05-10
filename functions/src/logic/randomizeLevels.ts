import seedrandom from "seedrandom";
import { createLine } from "../helpers/createLine";
import { levels } from "../levels";
import { Reward } from "../rewards/Reward";

export const randomizeLevels = (seed: string, rewards: Reward[]) => {
	const swordCopy = rewards.slice();
	const staffCopy = rewards.slice();
	const shieldCopy = rewards.slice();

	return levels
		.filter(level => level.hasAbility)
		.map(level => {
			const swordSeeder = seedrandom(
				seed + "sword" + swordCopy.length.toString()
			);
			const randomSword = Math.floor(swordSeeder() * swordCopy.length);
			const sword = swordCopy.splice(randomSword, 1)[0];

			const staffSeeder = seedrandom(
				seed + "staff" + staffCopy.length.toString()
			);
			const randomStaff = Math.floor(staffSeeder() * staffCopy.length);
			const staff = staffCopy.splice(randomStaff, 1)[0];

			const shieldSeeder = seedrandom(
				seed + "shield" + shieldCopy.length.toString()
			);
			const randomShield = Math.floor(shieldSeeder() * shieldCopy.length);
			const shield = shieldCopy.splice(randomShield, 1)[0];

			return { level, rewards: { sword, staff, shield } };
		})
		.reduce((result, random) => {
			return (
				result +
				createLine(random.level.abilities.sword, random.rewards.sword.value) +
				createLine(random.level.abilities.staff, random.rewards.staff.value) +
				createLine(random.level.abilities.shield, random.rewards.shield.value)
			);
		}, "");
};
