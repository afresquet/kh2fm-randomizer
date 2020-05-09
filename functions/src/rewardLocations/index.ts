import { RewardLocation } from "../RewardLocation";
import { bonusRewardLocations } from "./bonus";
import { criticalRewardLocations } from "./critical";
import { donaldRewardLocations } from "./Donald";
import { formRewardLocations } from "./form";
import { goofyRewardLocations } from "./Goofy";
import { hollowBastionRewardLocations } from "./hollowBastion";
import { popupRewardLocations } from "./popup";
import { simulatedTwilightTownRewardLocations } from "./simulatedTwilightTown";
import { twilightTownRewardLocations } from "./twilightTown";

export const rewardLocations: RewardLocation[] = [
	...popupRewardLocations,
	...bonusRewardLocations,
	...goofyRewardLocations,
	...donaldRewardLocations,
	...formRewardLocations,
	...criticalRewardLocations,
	...simulatedTwilightTownRewardLocations,
	...twilightTownRewardLocations,
	...hollowBastionRewardLocations,
];
