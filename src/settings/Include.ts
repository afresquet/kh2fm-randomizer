import { RandomizingAction, Toggle } from "./enums";

export interface Include {
	abilities: RandomizingAction;
	donaldAbilities: Toggle;
	goofyAbilities: Toggle;
	organizationXIII: RandomizingAction;
	olympusCups: RandomizingAction;
	ultimaWeapon: Toggle;
	finalForm: Toggle;
	formAbilities: RandomizingAction;
	growthAbilities: RandomizingAction;
	maxGrowthAbilities: Toggle;
	synthItems: Toggle;
}

export const defaultInclude: Include = {
	abilities: RandomizingAction.RANDOMIZE,
	donaldAbilities: Toggle.ON,
	goofyAbilities: Toggle.ON,
	organizationXIII: RandomizingAction.RANDOMIZE,
	olympusCups: RandomizingAction.RANDOMIZE,
	ultimaWeapon: Toggle.ON,
	finalForm: Toggle.ON,
	formAbilities: RandomizingAction.RANDOMIZE,
	growthAbilities: RandomizingAction.RANDOMIZE,
	maxGrowthAbilities: Toggle.ON,
	synthItems: Toggle.ON,
};
