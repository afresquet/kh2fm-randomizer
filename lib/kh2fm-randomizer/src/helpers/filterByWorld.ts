import { Configuration } from "..";
import { RandomizingAction } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { RewardLocation } from "../types/RewardLocation";

export const worlds: [string, LocationName][] = [
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

// TODO: add better rejectCallback handling
const defaultRejectCallback = (world: RandomizingAction) =>
	world !== RandomizingAction.RANDOMIZE;

/**
 * @description Returns a filter function for arrays of RewardLocations, which filters them by world based off the rejectCallback that is passed, by default it rejects if it's not set to Randomize.
 */
export const filterByWorld = (
	configuration: Configuration,
	rejectCallback = defaultRejectCallback
) => (location: RewardLocation): boolean => {
	const world =
		location.gameMode?.[configuration.gameMode.mode]?.world ||
		location.location;

	for (const [worldName, locationName] of worlds) {
		if (world === locationName) {
			return !rejectCallback(configuration.worlds[worldName]);
		}
	}

	return false;
};
