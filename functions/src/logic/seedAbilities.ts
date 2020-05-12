import seedrandom from "seedrandom";
import { Configuration } from "../Configuration";
import { levels } from "../levels";
import { RewardLocationType } from "../rewardLocations/RewardLocation";
import { Reward } from "../rewards/Reward";
import { Seed } from "./createSeed";

export function* seedAbilities(
	rewards: Reward[],
	configuration: Configuration
): IterableIterator<Seed> {
	const swordCopy = rewards.slice();
	const staffCopy = rewards.slice();
	const shieldCopy = rewards.slice();

	const abilityLevels = levels.filter(level => level.hasAbility);

	for (let i = 0; i < abilityLevels.length; i++) {
		const level = abilityLevels[i];

		const swordSeeder = seedrandom(configuration.seed + "sword" + i.toString());
		const randomSword = Math.floor(swordSeeder() * swordCopy.length);
		const sword = swordCopy.splice(randomSword, 1)[0];

		const staffSeeder = seedrandom(configuration.seed + "staff" + i.toString());
		const randomStaff = Math.floor(staffSeeder() * staffCopy.length);
		const staff = staffCopy.splice(randomStaff, 1)[0];

		const shieldSeeder = seedrandom(
			configuration.seed + "shield" + i.toString()
		);
		const randomShield = Math.floor(shieldSeeder() * shieldCopy.length);
		const shield = shieldCopy.splice(randomShield, 1)[0];

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				description: `LV${level.level} (Sword)`,
				value: level.abilities.sword,
				reward: {} as any,
			},
			reward: sword,
		};

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				description: `LV${level.level} (Staff)`,
				value: level.abilities.staff,
				reward: {} as any,
			},
			reward: staff,
		};

		yield {
			location: {
				type: RewardLocationType.LEVELUP,
				description: `LV${level.level} (Shield)`,
				value: level.abilities.shield,
				reward: {} as any,
			},
			reward: shield,
		};
	}
}
