import { agrabahRewardLocations } from "./agrabah";
import { beastsCastleRewardLocations } from "./beastsCastle";
import { bonusRewardLocations } from "./bonus";
import { cavernOfRememberanceRewardLocations } from "./cavernOfRememberance";
import { disneyCastleRewardLocations } from "./disneyCastle";
import { formRewardLocations } from "./form";
import { halloweenTownRewardLocations } from "./halloweenTown";
import { hollowBastionRewardLocations } from "./hollowBastion";
import { landOfDragonsRewardLocations } from "./landOfDragons";
import { olympusRewardLocations } from "./olympus";
import { poohRewardLocations } from "./pooh";
import { popupRewardLocations } from "./popup";
import { portRoyalRewardLocations } from "./portRoyal";
import { prideLandsRewardLocations } from "./prideLands";
import { RewardLocation } from "./RewardLocation";
import { simulatedTwilightTownRewardLocations } from "./simulatedTwilightTown";
import { spaceParanoidsRewardLocations } from "./spaceParanoids";
import { timelessRiverRewardLocations } from "./timelessRiver";
import { twilightTownRewardLocations } from "./twilightTown";
import { twtnwRewardLocations } from "./twtnw";

export const rewardLocations: RewardLocation[] = [
	...popupRewardLocations,
	...bonusRewardLocations,
	...formRewardLocations,
	...simulatedTwilightTownRewardLocations,
	...twilightTownRewardLocations,
	...hollowBastionRewardLocations,
	...cavernOfRememberanceRewardLocations,
	...beastsCastleRewardLocations,
	...olympusRewardLocations,
	...agrabahRewardLocations,
	...landOfDragonsRewardLocations,
	...poohRewardLocations,
	...prideLandsRewardLocations,
	...disneyCastleRewardLocations,
	...timelessRiverRewardLocations,
	...halloweenTownRewardLocations,
	...portRoyalRewardLocations,
	...spaceParanoidsRewardLocations,
	...twtnwRewardLocations,
];
