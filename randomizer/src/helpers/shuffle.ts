import seedrandom from "seedrandom";

/**
 * @description Shuffles an array based off a seed, so the result will always be the same when the same seed is provided.
 */
export function* shuffle<T>(array: T[], seed: string): IterableIterator<T> {
	const arrayCopy = array.slice();

	for (let i = 0; i < array.length; i++) {
		const random = seedrandom(seed + i.toString())();
		const index = Math.floor(random * arrayCopy.length);
		const element = arrayCopy.splice(index, 1)[0];

		yield element;
	}
}
