import { LocationName } from "../LocationName";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { Configuration } from "../settings/Configuration";
import { RandomizingAction } from "../settings/enums";

export const filterByWorld = (configuration: Configuration) => (
	location: RewardLocation
): boolean => {
	switch (
		location.gameMode?.[configuration.gameMode.mode]?.world ||
		location.location
	) {
		case LocationName.AGRABAH: {
			if (configuration.worlds.agrabah !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.ATLANTICA: {
			if (configuration.worlds.atlantica !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.BEASTS_CASTLE: {
			if (configuration.worlds.beastsCastle !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.DISNEY_CASTLE: {
			if (configuration.worlds.disneyCastle !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.HALLOWEEN_TOWN: {
			if (configuration.worlds.halloweenTown !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.HOLLOW_BASTION: {
			if (configuration.worlds.hollowBastion !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.CAVERN_OF_REMEMBRANCE: {
			if (
				configuration.worlds.cavernOfRemembrance !== RandomizingAction.RANDOMIZE
			)
				return false;

			break;
		}
		case LocationName.LAND_OF_DRAGONS: {
			if (configuration.worlds.landOfDragons !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.OLYMPUS: {
			if (configuration.worlds.olympus !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.POOH: {
			if (configuration.worlds.pooh !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.PORT_ROYAL: {
			if (configuration.worlds.portRoyal !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.PRIDE_LANDS: {
			if (configuration.worlds.prideLands !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.SIMULATED_TWILIGHT_TOWN: {
			if (
				configuration.worlds.simulatedTwilightTown !==
				RandomizingAction.RANDOMIZE
			)
				return false;

			break;
		}
		case LocationName.SPACE_PARANOIDS: {
			if (configuration.worlds.spaceParanoids !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.TIMELESS_RIVER: {
			if (configuration.worlds.timelessRiver !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.TWILIGHT_TOWN: {
			if (configuration.worlds.twilightTown !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case LocationName.TWTNW: {
			if (configuration.worlds.twtnw !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		default:
			break;
	}

	return true;
};
