import { RewardLocation } from "../RewardLocation";
import { agrabahRewardLocations } from "./agrabah";
import { beastsCastleRewardLocations } from "./beastsCastle";
import { cavernOfRememberanceRewardLocations } from "./cavernOfRememberance";
import { disneyCastleRewardLocations } from "./disneyCastle";
import { halloweenTownRewardLocations } from "./halloweenTown";
import { hollowBastionRewardLocations } from "./hollowBastion";
import { landOfDragonsRewardLocations } from "./landOfDragons";
import { olympusRewardLocations } from "./olympus";
import { poohRewardLocations } from "./pooh";
import { portRoyalRewardLocations } from "./portRoyal";
import { prideLandsRewardLocations } from "./prideLands";
import { simulatedTwilightTownRewardLocations } from "./simulatedTwilightTown";
import { spaceParanoidsRewardLocations } from "./spaceParanoids";
import { timelessRiverRewardLocations } from "./timelessRiver";
import { twilightTownRewardLocations } from "./twilightTown";
import { twtnwRewardLocations } from "./twtnw";

export const worldRewardLocations: RewardLocation[] = [
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
