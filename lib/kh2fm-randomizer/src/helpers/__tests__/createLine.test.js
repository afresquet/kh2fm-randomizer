const { createLine } = require("../createLine.ts");

describe("createLine", () => {
	test("works for address ABCDEFGH and digit 12345678", () => {
		const result = createLine("ABCDEFGH", "12345678");
		expect(result).toEqual("patch=1,EE,ABCDEFGH,extended,12345678\n");
	});

	test("works for address ABCD and digit 1234", () => {
		const result = createLine("ABCD", "1234");
		expect(result).toEqual("patch=1,EE,0000ABCD,extended,00001234\n");
	});

	test("creates line without a new line at the end", () => {
		const result = createLine("ABCDEFGH", "12345678", false);
		expect(result).toEqual("patch=1,EE,ABCDEFGH,extended,12345678");
	});
});
