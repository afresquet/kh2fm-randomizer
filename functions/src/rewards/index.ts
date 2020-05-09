import { agrabahRewards } from "./agrabah";
import { beastsCastleRewards } from "./beastsCastle";
import { bonusRewards } from "./bonus";
import { cavernOfRememberanceRewards } from "./cavernOfRememberance";
import { criticalRewards } from "./critical";
import { disneyCastleRewards } from "./disneyCastle";
import { donaldRewards } from "./donald";
import { formRewards } from "./form";
import { goofyRewards } from "./goofy";
import { halloweenTownRewards } from "./halloweenTown";
import { hollowBastionRewards } from "./hollowBastion";
import { landOfDragonsRewards } from "./landOfDragons";
import { levelupRewards } from "./levelup";
import { olympusRewards } from "./olympus";
import { poohRewards } from "./pooh";
import { popupRewards } from "./popup";
import { portRoyalRewards } from "./portRoyal";
import { prideLandsRewards } from "./prideLands";
import { Reward } from "./Reward";
import { simulatedTwilightTownRewards } from "./simulatedTwilightTown";
import { spaceParanoidsRewards } from "./spaceParanoids";
import { timelessRiverRewards } from "./timelessRiver";
import { twilightTownRewards } from "./twilightTown";
import { twtnwRewards } from "./twtnw";

export const rewardLocations: Reward[] = [
	...popupRewards,
	...levelupRewards,
	...bonusRewards,
	...goofyRewards,
	...donaldRewards,
	...formRewards,
	...criticalRewards,
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
