import { createSeed } from "..";
import { GameMode } from "../types/configuration/enums";
import { defaultExperimental } from "../types/configuration/Experimental";
import { defaultGoAModSettings } from "../types/configuration/GoAModSettings";
import { defaultInclude } from "../types/configuration/Include";
import { defaultSettings } from "../types/configuration/Settings";
import { defaultWorlds } from "../types/configuration/Worlds";

describe("createSeed", () => {
	test("Makes seed without crashing", () => {
		expect(() =>
			createSeed({
				name: "test",
				gameMode: {
					mode: GameMode.GOA_MOD,
					goa: defaultGoAModSettings,
				},
				settings: defaultSettings,
				include: defaultInclude,
				worlds: defaultWorlds,
				experimental: defaultExperimental,
			})
		).not.toThrow();
	});
});
