import { abilityRewards } from "./ability";
import { accessoryReward } from "./accessory";
import { armorRewards } from "./armor";
import { bonusRewards } from "./bonus";
import { formRewards } from "./form";
import { growthAbilityRewards } from "./growthAbility";
import { itemRewards } from "./item";
import { keybladeRewards } from "./keyblade";
import { keyItemRewards } from "./keyItem";
import { mapRewards } from "./map";
import { proofRewards } from "./proof";
import { recipeRewards } from "./recipe";
import { reportRewards } from "./report";
import { shieldRewards } from "./shield";
import { spellRewards } from "./spell";
import { staffRewards } from "./staff";
import { summonRewards } from "./summon";
import { synthMaterialRewards } from "./synthMaterial";

export const Rewards = {
	...keybladeRewards,
	...shieldRewards,
	...staffRewards,
	...abilityRewards,
	...growthAbilityRewards,
	...spellRewards,
	...formRewards,
	...summonRewards,
	...itemRewards,
	...synthMaterialRewards,
	...armorRewards,
	...accessoryReward,
	...mapRewards,
	...reportRewards,
	...recipeRewards,
	...proofRewards,
	...keyItemRewards,
	...bonusRewards,
};
