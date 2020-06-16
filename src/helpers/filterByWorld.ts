import {
	RewardLocation,
	RewardLocationName,
} from "../rewardLocations/RewardLocation";
import { Configuration } from "../settings/Configuration";
import { RandomizingAction } from "../settings/enums";

export const filterByWorld = (configuration: Configuration) => (
	location: RewardLocation
): boolean => {
	switch (
		location.gameMode?.[configuration.gameMode.mode]?.world ||
		location.name
	) {
		case RewardLocationName.AGRABAH: {
			if (configuration.worlds.agrabah !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.ATLANTICA: {
			if (configuration.worlds.atlantica !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.BEASTS_CASTLE: {
			if (configuration.worlds.beastsCastle !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.DISNEY_CASTLE: {
			if (configuration.worlds.disneyCastle !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.HALLOWEEN_TOWN: {
			if (configuration.worlds.halloweenTown !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.HOLLOW_BASTION: {
			if (configuration.worlds.hollowBastion !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.CAVERN_OF_REMEMBRANCE: {
			if (
				configuration.worlds.cavernOfRemembrance !== RandomizingAction.RANDOMIZE
			)
				return false;

			break;
		}
		case RewardLocationName.LAND_OF_DRAGONS: {
			if (configuration.worlds.landOfDragons !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.OLYMPUS: {
			if (configuration.worlds.olympus !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.POOH: {
			if (configuration.worlds.pooh !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.PORT_ROYAL: {
			if (configuration.worlds.portRoyal !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.PRIDE_LANDS: {
			if (configuration.worlds.prideLands !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.SIMULATED_TWILIGHT_TOWN: {
			if (
				configuration.worlds.simulatedTwilightTown !==
				RandomizingAction.RANDOMIZE
			)
				return false;

			break;
		}
		case RewardLocationName.SPACE_PARANOIDS: {
			if (configuration.worlds.spaceParanoids !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.TIMELESS_RIVER: {
			if (configuration.worlds.timelessRiver !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.TWILIGHT_TOWN: {
			if (configuration.worlds.twilightTown !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		case RewardLocationName.TWTNW: {
			if (configuration.worlds.twtnw !== RandomizingAction.RANDOMIZE)
				return false;

			break;
		}
		default:
			break;
	}

	return true;
};
