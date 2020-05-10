import { Reward } from "../Reward";
import { agrabahRewards } from "./agrabah";
import { beastsCastleRewards } from "./beastsCastle";
import { cavernOfRememberanceRewards } from "./cavernOfRememberance";
import { disneyCastleRewards } from "./disneyCastle";
import { halloweenTownRewards } from "./halloweenTown";
import { hollowBastionRewards } from "./hollowBastion";
import { landOfDragonsRewards } from "./landOfDragons";
import { olympusRewards } from "./olympus";
import { poohRewards } from "./pooh";
import { portRoyalRewards } from "./portRoyal";
import { prideLandsRewards } from "./prideLands";
import { simulatedTwilightTownRewards } from "./simulatedTwilightTown";
import { spaceParanoidsRewards } from "./spaceParanoids";
import { timelessRiverRewards } from "./timelessRiver";
import { twilightTownRewards } from "./twilightTown";
import { twtnwRewards } from "./twtnw";

export const worldRewards: Reward[] = [
	...simulatedTwilightTownRewards,
	...twilightTownRewards,
	...hollowBastionRewards,
	...cavernOfRememberanceRewards,
	...beastsCastleRewards,
	...olympusRewards,
	...agrabahRewards,
	...landOfDragonsRewards,
	...poohRewards,
	...prideLandsRewards,
	...disneyCastleRewards,
	...timelessRiverRewards,
	...halloweenTownRewards,
	...portRoyalRewards,
	...spaceParanoidsRewards,
	...twtnwRewards,
];
