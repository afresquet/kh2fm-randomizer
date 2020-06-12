import seedrandom from "seedrandom";

export function* shuffle<T>(array: T[], seed?: string): IterableIterator<T> {
	const arrayCopy = array.slice();

	for (let i = 0; i < array.length; i++) {
		const seeder = seed ? seedrandom(seed + i.toString()) : Math.random;
		const index = Math.floor(seeder() * arrayCopy.length);
		const element = arrayCopy.splice(index, 1)[0];

		yield element;
	}
}
