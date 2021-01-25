import { GameMode, RandomizingAction } from "../../types/configuration/enums";
import { defaultWorlds } from "../../types/configuration/Worlds";
import { LocationName } from "../../types/LocationName";
import { filterByWorld } from "../filterByWorld";

describe("filterByWorld", () => {
	const mockConfiguration: any = {
		gameMode: { mode: GameMode.GOA_MOD },
		worlds: { ...defaultWorlds, atlantica: RandomizingAction.RANDOMIZE },
	};
	const mockRewardLocations: any[] = [
		{ location: LocationName.AGRABAH },
		{ location: LocationName.ATLANTICA },
		{ location: LocationName.BEASTS_CASTLE },
		{ location: LocationName.DISNEY_CASTLE },
		{ location: LocationName.HALLOWEEN_TOWN },
		{ location: LocationName.HOLLOW_BASTION },
		{ location: LocationName.CAVERN_OF_REMEMBRANCE },
		{ location: LocationName.LAND_OF_DRAGONS },
		{ location: LocationName.OLYMPUS },
		{ location: LocationName.POOH },
		{ location: LocationName.PORT_ROYAL },
		{ location: LocationName.PRIDE_LANDS },
		{ location: LocationName.SIMULATED_TWILIGHT_TOWN },
		{ location: LocationName.SPACE_PARANOIDS },
		{ location: LocationName.TIMELESS_RIVER },
		{ location: LocationName.TWILIGHT_TOWN },
		{ location: LocationName.TWTNW },
	];
	const mockRewardLocationsGameMode: any = mockRewardLocations.map(
		({ location }) => ({
			gameMode: {
				[mockConfiguration.gameMode.mode]: {
					world: location,
				},
			},
		})
	);

	test("doesn't remove if set to Randomize", () => {
		expect(
			mockRewardLocations.filter(filterByWorld(mockConfiguration))
		).toHaveLength(mockRewardLocations.length);
		expect(
			mockRewardLocationsGameMode.filter(filterByWorld(mockConfiguration))
		).toHaveLength(mockRewardLocationsGameMode.length);
	});

	const worlds = [
		["agrabah", LocationName.AGRABAH],
		["simulatedTwilightTown", LocationName.SIMULATED_TWILIGHT_TOWN],
		["twilightTown", LocationName.TWILIGHT_TOWN],
		["hollowBastion", LocationName.HOLLOW_BASTION],
		["cavernOfRemembrance", LocationName.CAVERN_OF_REMEMBRANCE],
		["beastsCastle", LocationName.BEASTS_CASTLE],
		["olympus", LocationName.OLYMPUS],
		["landOfDragons", LocationName.LAND_OF_DRAGONS],
		["pooh", LocationName.POOH],
		["atlantica", LocationName.ATLANTICA],
		["prideLands", LocationName.PRIDE_LANDS],
		["disneyCastle", LocationName.DISNEY_CASTLE],
		["timelessRiver", LocationName.TIMELESS_RIVER],
		["halloweenTown", LocationName.HALLOWEEN_TOWN],
		["portRoyal", LocationName.PORT_ROYAL],
		["spaceParanoids", LocationName.SPACE_PARANOIDS],
		["twtnw", LocationName.TWTNW],
	];
	const cases = worlds.map(([name, location]) => ({
		configuration: {
			worlds: {
				[name]: RandomizingAction.REPLACE,
			},
		},
		locations: [{ location }],
	}));
	test.each(cases)(
		"test",
		({ locations, configuration }: { locations: any; configuration: any }) => {
			expect(locations.filter(filterByWorld(configuration)));
		}
	);
});
