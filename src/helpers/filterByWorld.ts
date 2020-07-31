import { LocationName } from "../LocationName";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { Configuration } from "../settings/Configuration";
import { RandomizingAction } from "../settings/enums";

export const filterByWorld = (
	configuration: Configuration,
	rejectCallback: (world: RandomizingAction) => boolean = world =>
		world !== RandomizingAction.RANDOMIZE
) => (location: RewardLocation): boolean => {
	switch (
		location.gameMode?.[configuration.gameMode.mode]?.world ||
		location.location
	) {
		case LocationName.AGRABAH: {
			if (rejectCallback(configuration.worlds.agrabah)) return false;

			break;
		}
		case LocationName.ATLANTICA: {
			if (rejectCallback(configuration.worlds.atlantica)) return false;

			break;
		}
		case LocationName.BEASTS_CASTLE: {
			if (rejectCallback(configuration.worlds.beastsCastle)) return false;

			break;
		}
		case LocationName.DISNEY_CASTLE: {
			if (rejectCallback(configuration.worlds.disneyCastle)) return false;

			break;
		}
		case LocationName.HALLOWEEN_TOWN: {
			if (rejectCallback(configuration.worlds.halloweenTown)) return false;

			break;
		}
		case LocationName.HOLLOW_BASTION: {
			if (rejectCallback(configuration.worlds.hollowBastion)) return false;

			break;
		}
		case LocationName.CAVERN_OF_REMEMBRANCE: {
			if (rejectCallback(configuration.worlds.cavernOfRemembrance))
				return false;

			break;
		}
		case LocationName.LAND_OF_DRAGONS: {
			if (rejectCallback(configuration.worlds.landOfDragons)) return false;

			break;
		}
		case LocationName.OLYMPUS: {
			if (rejectCallback(configuration.worlds.olympus)) return false;

			break;
		}
		case LocationName.POOH: {
			if (rejectCallback(configuration.worlds.pooh)) return false;

			break;
		}
		case LocationName.PORT_ROYAL: {
			if (rejectCallback(configuration.worlds.portRoyal)) return false;

			break;
		}
		case LocationName.PRIDE_LANDS: {
			if (rejectCallback(configuration.worlds.prideLands)) return false;

			break;
		}
		case LocationName.SIMULATED_TWILIGHT_TOWN: {
			if (rejectCallback(configuration.worlds.simulatedTwilightTown))
				return false;

			break;
		}
		case LocationName.SPACE_PARANOIDS: {
			if (rejectCallback(configuration.worlds.spaceParanoids)) return false;

			break;
		}
		case LocationName.TIMELESS_RIVER: {
			if (rejectCallback(configuration.worlds.timelessRiver)) return false;

			break;
		}
		case LocationName.TWILIGHT_TOWN: {
			if (rejectCallback(configuration.worlds.twilightTown)) return false;

			break;
		}
		case LocationName.TWTNW: {
			if (rejectCallback(configuration.worlds.twtnw)) return false;

			break;
		}
		default:
			break;
	}

	return true;
};
