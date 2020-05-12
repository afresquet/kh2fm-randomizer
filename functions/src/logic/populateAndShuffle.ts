import { Configuration } from "../Configuration";
import { agrabahRewardLocations } from "../rewardLocations/agrabah";
import { atlanticaRewardLocations } from "../rewardLocations/atlantica";
import { beastsCastleRewardLocations } from "../rewardLocations/beastsCastle";
import { bonusRewardLocations } from "../rewardLocations/bonus";
import { cavernOfRememberanceRewardLocations } from "../rewardLocations/cavernOfRememberance";
import { criticalRewardLocations } from "../rewardLocations/critical";
import { disneyCastleRewardLocations } from "../rewardLocations/disneyCastle";
import { formRewardLocations } from "../rewardLocations/form";
import { halloweenTownRewardLocations } from "../rewardLocations/halloweenTown";
import { hollowBastionRewardLocations } from "../rewardLocations/hollowBastion";
import { landOfDragonsRewardLocations } from "../rewardLocations/landOfDragons";
import { abilityLevels } from "../rewardLocations/levels";
import { olympusRewardLocations } from "../rewardLocations/olympus";
import { poohRewardLocations } from "../rewardLocations/pooh";
import { portRoyalRewardLocations } from "../rewardLocations/portRoyal";
import { prideLandsRewardLocations } from "../rewardLocations/prideLands";
import { RewardLocation } from "../rewardLocations/RewardLocation";
import { simulatedTwilightTownRewardLocations } from "../rewardLocations/simulatedTwilightTown";
import { spaceParanoidsRewardLocations } from "../rewardLocations/spaceParanoids";
import { timelessRiverRewardLocations } from "../rewardLocations/timelessRiver";
import { twilightTownRewardLocations } from "../rewardLocations/twilightTown";
import { twtnwRewardLocations } from "../rewardLocations/twtnw";
import { Reward } from "../rewards/Reward";
import { shuffle } from "./shuffle";

export const populateAndShuffle = (
	configuration: Configuration
): [Reward[], RewardLocation[]] => {
	const rewards: Reward[] = [];
	const locations: RewardLocation[] = [];

	function push(locationArray: RewardLocation[]) {
		rewards.push(
			...locationArray.map(location => {
				const gameModeReward =
					location.gameMode?.[configuration.gameMode.mode]?.[
						configuration.gameMode.version
					]?.reward;

				return gameModeReward || location.reward;
			})
		);
		locations.push(...locationArray);
	}

	if (configuration.formAbilities) {
		push(formRewardLocations);
	}

	if (configuration.criticalMode) {
		push(criticalRewardLocations);
	}

	if (configuration.simulatedTwilightTown) {
		push(simulatedTwilightTownRewardLocations);
	}

	if (configuration.twilightTown) {
		push(twilightTownRewardLocations);
	}

	if (configuration.hollowBastion) {
		push(hollowBastionRewardLocations);
	}

	if (configuration.cavernOfRemembrance) {
		push(cavernOfRememberanceRewardLocations);
	}

	if (configuration.beastsCastle) {
		push(beastsCastleRewardLocations);
	}

	if (configuration.olympus) {
		push(olympusRewardLocations);
	}

	if (configuration.agrabah) {
		push(agrabahRewardLocations);
	}

	if (configuration.landOfDragons) {
		push(landOfDragonsRewardLocations);
	}

	if (configuration.pooh) {
		push(poohRewardLocations);
	}

	if (configuration.atlantica) {
		push(atlanticaRewardLocations);
	}

	if (configuration.prideLands) {
		push(prideLandsRewardLocations);
	}

	if (configuration.disneyCastle) {
		push(disneyCastleRewardLocations);
	}

	if (configuration.timelessRiver) {
		push(timelessRiverRewardLocations);
	}

	if (configuration.halloweenTown) {
		push(halloweenTownRewardLocations);
	}

	if (configuration.portRoyal) {
		push(portRoyalRewardLocations);
	}

	if (configuration.spaceParanoids) {
		push(spaceParanoidsRewardLocations);
	}

	if (configuration.twtnw) {
		push(twtnwRewardLocations);
	}

	if (configuration.abilities) {
		rewards.push(...abilityLevels.map(level => level.abilities.sword.reward!));
		push(bonusRewardLocations);
	}

	return [shuffle(rewards, configuration.seed), locations];
};
