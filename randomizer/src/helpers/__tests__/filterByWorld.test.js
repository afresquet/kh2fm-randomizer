const {
	GameMode,
	RandomizingAction,
} = require("../../types/configuration/enums");
const { defaultWorlds } = require("../../types/configuration/Worlds");
const { LocationName } = require("../../types/LocationName");
const { filterByWorld, worlds } = require("../filterByWorld");

describe("filterByWorld", () => {
	test("doesn't remove if set to Randomize", () => {
		const mockConfiguration = {
			gameMode: { mode: GameMode.GOA_MOD },
			worlds: { ...defaultWorlds, atlantica: RandomizingAction.RANDOMIZE },
		};
		const mockRewardLocations = worlds.map(([, location]) => ({
			location,
		}));
		const mockRewardLocationsGameMode = worlds.map(([, location]) => ({
			gameMode: {
				[mockConfiguration.gameMode.mode]: {
					world: location,
				},
			},
		}));

		const result = mockRewardLocations.filter(filterByWorld(mockConfiguration));
		expect(result).toHaveLength(mockRewardLocations.length);

		const resultWithGameMode = mockRewardLocationsGameMode.filter(
			filterByWorld(mockConfiguration)
		);
		expect(resultWithGameMode).toHaveLength(mockRewardLocationsGameMode.length);
	});

	const cases = worlds.map(([name, location]) => {
		const configuration = {
			worlds: {
				[name]: RandomizingAction.REPLACE,
			},
		};
		const locations = [{ location }];

		return [location, locations, configuration];
	});
	test.each(cases)(
		"removes %s if not set to Randomize",
		(name, locations, configuration) => {
			const result = locations.filter(filterByWorld(configuration));
			expect(result).toHaveLength(0);
		}
	);

	test("removes if world doesn't match", () => {
		const mockRewardLocations = [{ location: "The World That Never Matches" }];

		const result = mockRewardLocations.filter(filterByWorld({}));
		expect(result).toHaveLength(0);
	});

	describe("works with custom reject callback", () => {
		test("rejects if world is set to Replace", () => {
			const rejectCallback = world => world === RandomizingAction.REPLACE;
			const mockConfiguration = {
				worlds: {
					agrabah: RandomizingAction.VANILLA,
					atlantica: RandomizingAction.REPLACE,
					pooh: RandomizingAction.RANDOMIZE,
				},
			};
			const mockRewardLocations = [
				{ location: LocationName.AGRABAH },
				{ location: LocationName.ATLANTICA },
				{ location: LocationName.POOH },
			];

			const result = mockRewardLocations.filter(
				filterByWorld(mockConfiguration, rejectCallback)
			);
			expect(result).toContain(mockRewardLocations[0]);
			expect(result).not.toContain(mockRewardLocations[1]);
			expect(result).toContain(mockRewardLocations[2]);
		});

		test("rejects if world is not set to Vanilla", () => {
			const rejectCallback = world => world !== RandomizingAction.VANILLA;
			const mockConfiguration = {
				worlds: {
					agrabah: RandomizingAction.VANILLA,
					atlantica: RandomizingAction.REPLACE,
					pooh: RandomizingAction.RANDOMIZE,
				},
			};
			const mockRewardLocations = [
				{ location: LocationName.AGRABAH },
				{ location: LocationName.ATLANTICA },
				{ location: LocationName.POOH },
			];

			const result = mockRewardLocations.filter(
				filterByWorld(mockConfiguration, rejectCallback)
			);
			expect(result).toContain(mockRewardLocations[0]);
			expect(result).not.toContain(mockRewardLocations[1]);
			expect(result).not.toContain(mockRewardLocations[2]);
		});
	});
});
