const { Toggle } = require("../../types/configuration/enums.ts");
const patches = require("../index.ts");

const toggleCases = [
	["earlyLionDash", patches.earlyLionDash],
	["fasterOogie", patches.fasterOogie],
	["fasterPresents", patches.fasterPresents],
	["fastHyenasTwo", patches.fastHyenasTwo],
];

describe("patches", () => {
	// Toggle patches
	describe.each(toggleCases)("%s", (name, patch) => {
		test("returns patch when it's toggled on", () => {
			const result = patch({
				configuration: {
					gameMode: {
						goa: { [name]: Toggle.ON },
					},
				},
			});

			expect(result).not.toEqual("");
			expect(result.length).toBeGreaterThan(0);
		});

		test("returns empty string when it's toggled off", () => {
			const result = patch({
				configuration: {
					gameMode: {
						goa: { [name]: Toggle.OFF },
					},
				},
			});

			expect(result).toEqual("");
			expect(result).toHaveLength(0);
		});
	});
});
