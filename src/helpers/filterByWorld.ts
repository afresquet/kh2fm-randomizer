import {
	RewardLocation,
	RewardLocationName,
} from "../rewardLocations/RewardLocation";
import { Configuration } from "../settings/Configuration";
import { RandomizingAction } from "../settings/enums";

export const filterByWorld = (
	configuration: Configuration,
	rejectCallback: (world: RandomizingAction) => boolean = world =>
		world !== RandomizingAction.RANDOMIZE
) => (location: RewardLocation): boolean => {
	switch (
		location.gameMode?.[configuration.gameMode.mode]?.world ||
		location.name
	) {
		case RewardLocationName.AGRABAH: {
			if (rejectCallback(configuration.worlds.agrabah)) return false;

			break;
		}
		case RewardLocationName.ATLANTICA: {
			if (rejectCallback(configuration.worlds.atlantica)) return false;

			break;
		}
		case RewardLocationName.BEASTS_CASTLE: {
			if (rejectCallback(configuration.worlds.beastsCastle)) return false;

			break;
		}
		case RewardLocationName.DISNEY_CASTLE: {
			if (rejectCallback(configuration.worlds.disneyCastle)) return false;

			break;
		}
		case RewardLocationName.HALLOWEEN_TOWN: {
			if (rejectCallback(configuration.worlds.halloweenTown)) return false;

			break;
		}
		case RewardLocationName.HOLLOW_BASTION: {
			if (rejectCallback(configuration.worlds.hollowBastion)) return false;

			break;
		}
		case RewardLocationName.CAVERN_OF_REMEMBRANCE: {
			if (rejectCallback(configuration.worlds.cavernOfRemembrance))
				return false;

			break;
		}
		case RewardLocationName.LAND_OF_DRAGONS: {
			if (rejectCallback(configuration.worlds.landOfDragons)) return false;

			break;
		}
		case RewardLocationName.OLYMPUS: {
			if (rejectCallback(configuration.worlds.olympus)) return false;

			break;
		}
		case RewardLocationName.POOH: {
			if (rejectCallback(configuration.worlds.pooh)) return false;

			break;
		}
		case RewardLocationName.PORT_ROYAL: {
			if (rejectCallback(configuration.worlds.portRoyal)) return false;

			break;
		}
		case RewardLocationName.PRIDE_LANDS: {
			if (rejectCallback(configuration.worlds.prideLands)) return false;

			break;
		}
		case RewardLocationName.SIMULATED_TWILIGHT_TOWN: {
			if (rejectCallback(configuration.worlds.simulatedTwilightTown))
				return false;

			break;
		}
		case RewardLocationName.SPACE_PARANOIDS: {
			if (rejectCallback(configuration.worlds.spaceParanoids)) return false;

			break;
		}
		case RewardLocationName.TIMELESS_RIVER: {
			if (rejectCallback(configuration.worlds.timelessRiver)) return false;

			break;
		}
		case RewardLocationName.TWILIGHT_TOWN: {
			if (rejectCallback(configuration.worlds.twilightTown)) return false;

			break;
		}
		case RewardLocationName.TWTNW: {
			if (rejectCallback(configuration.worlds.twtnw)) return false;

			break;
		}
		default:
			break;
	}

	return true;
};
