import * as patches from "..";
import { Configuration } from "../../types/configuration/Configuration";
import { Toggle } from "../../types/configuration/enums";
import { Patch } from "../../types/Patch";

const toggleCases: [keyof Configuration["gameMode"]["goa"], Patch][] = [
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
				} as any,
			} as any);

			expect(result).not.toEqual("");
			expect(result.length).toBeGreaterThan(0);
		});

		test("returns empty string when it's toggled off", () => {
			const result = patch({
				configuration: {
					gameMode: {
						goa: { [name]: Toggle.OFF },
					},
				} as any,
			} as any);

			expect(result).toEqual("");
			expect(result).toHaveLength(0);
		});
	});
});
