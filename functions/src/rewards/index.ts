import { abilitiyRewards } from "./ability";
import { accessoryReward } from "./accessory";
import { armorRewards } from "./armor";
import { formRewards } from "./form";
import { itemRewards } from "./item";
import { keybladeRewards } from "./keyblade";
import { limitRewards } from "./limit";
import { mapRewards } from "./map";
import { miscellaneousRewards } from "./miscellaneous";
import { proofRewards } from "./proof";
import { recipeRewards } from "./recipe";
import { reportRewards } from "./report";
import { Reward } from "./Reward";
import { RewardType } from "./RewardType";
import { shieldRewards } from "./shield";
import { spellRewards } from "./spell";
import { staffRewards } from "./staff";
import { summonRewards } from "./summon";

export const Rewards: { [name: string]: Reward } = {
	...keybladeRewards,
	...shieldRewards,
	...staffRewards,
	...abilitiyRewards,
	...limitRewards,
	...spellRewards,
	...formRewards,
	...summonRewards,
	...itemRewards,
	...armorRewards,
	...accessoryReward,
	...mapRewards,
	TORN_PAGE: {
		type: RewardType.TORNPAGE,
		name: "Torn Pages",
		value: "0020",
	},
	...reportRewards,
	...recipeRewards,
	...proofRewards,
	...miscellaneousRewards,
};
