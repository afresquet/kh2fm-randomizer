import seedrandom from "seedrandom";

export class LevelStats {
	private ability = 0;
	private defense = 2;
	private magic = 6;
	private strength = 2;

	private level = 1;

	levelUp(seedVariable?: string) {
		this.level += 1;

		const seed = seedVariable
			? seedrandom(seedVariable + this.level.toString())
			: Math.random;

		const random = Math.floor(seed() * 4);

		if (random === 0) {
			this.ability += 2;
		} else if (random === 1) {
			this.defense += 1;
		} else if (random === 2) {
			this.magic += 2;
		} else if (random === 3) {
			this.strength += 2;
		}
	}

	get hexCode() {
		const values = [this.ability, this.defense, this.magic, this.strength];

		const hex = values.map(x => x.toString(16).padStart(2, "0").toUpperCase());

		return hex.join("");
	}
}
