import seedrandom from "seedrandom";

export const shuffle = <T>(array: T[], seed?: string): T[] => {
	const arrayCopy = array.slice();

	const result: T[] = [];

	for (let i = 0; i < array.length; i++) {
		const seeder = seed ? seedrandom(seed + i.toString()) : Math.random;
		const index = Math.floor(seeder() * arrayCopy.length);
		const element = arrayCopy.splice(index, 1)[0];
		result.push(element);
	}

	return result;
};
