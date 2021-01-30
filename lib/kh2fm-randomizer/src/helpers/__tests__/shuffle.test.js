const { shuffle } = require("../shuffle.ts");

describe("shuffle", () => {
	test('[1, 2, 3, 4, 5] becomes [1, 3, 5, 2, 4] with seed "Test 1"', () => {
		const original = [1, 2, 3, 4, 5];
		const expectedResult = [1, 3, 5, 2, 4];
		const seed = "Test 1";

		const result1 = [...shuffle(original, seed)];
		expect(result1).toEqual(expectedResult);
		const result2 = [...shuffle(original, seed)];
		expect(result2).toEqual(expectedResult);
		const result3 = [...shuffle(original, seed)];
		expect(result3).toEqual(expectedResult);
	});

	test('[5, 4, 3, 2, 1] becomes [2, 4, 5, 1, 3] with seed "Test 2"', () => {
		const original = [5, 4, 3, 2, 1];
		const expectedResult = [2, 4, 5, 1, 3];
		const seed = "Test 2";

		const result1 = [...shuffle(original, seed)];
		expect(result1).toEqual(expectedResult);
		const result2 = [...shuffle(original, seed)];
		expect(result2).toEqual(expectedResult);
		const result3 = [...shuffle(original, seed)];
		expect(result3).toEqual(expectedResult);
	});
});
