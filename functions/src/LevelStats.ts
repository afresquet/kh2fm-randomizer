import seedrandom from "seedrandom";

export class LevelStats {
	ability = 0;
	defense = 2;
	magic = 6;
	strength = 2;

	private level = 1;

	levelUp(seed?: string, doubleStats?: boolean) {
		this.level += 1;

		const seeder = seed
			? seedrandom(seed + this.level.toString())
			: Math.random;

		const random = Math.floor(seeder() * 4);

		this.increase(random);

		if (doubleStats) {
			let random2: number = random;
			let attempts = 0;

			while (random === random2) {
				const seeder2 = seed
					? seedrandom(seed + this.level.toString() + attempts.toString())
					: Math.random;

				random2 = Math.floor(seeder2() * 4);

				attempts++;
			}

			this.increase(random2);
		}
	}

	private increase(stat: number) {
		if (stat === 0) {
			this.ability += 2;
		} else if (stat === 1) {
			this.defense += 1;
		} else if (stat === 2) {
			this.magic += 2;
		} else if (stat === 3) {
			this.strength += 2;
		}
	}

	get hexCode() {
		const values = [this.ability, this.defense, this.magic, this.strength];

		const hex = values.map(x => x.toString(16).padStart(2, "0").toUpperCase());

		return hex.join("");
	}
}
