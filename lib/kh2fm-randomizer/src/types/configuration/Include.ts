import { RandomizingAction, Toggle } from "./enums";

export interface Include {
	keybladeAbilities: RandomizingAction;
	donaldAbilities: Toggle;
	goofyAbilities: Toggle;
	absentSilhouettes: RandomizingAction;
	dataOrganizationXIII: RandomizingAction;
	olympusCups: RandomizingAction;
	hadesCup: Toggle;
	terra: Toggle;
	sephiroth: Toggle;
	ultimaWeapon: Toggle;
	finalForm: Toggle;
	formAbilities: RandomizingAction;
	growthAbilities: RandomizingAction;
	maxGrowthAbilities: Toggle;
	synthItems: Toggle;
}

export const defaultInclude: Include = {
	keybladeAbilities: RandomizingAction.REPLACE,
	donaldAbilities: Toggle.ON,
	goofyAbilities: Toggle.ON,
	absentSilhouettes: RandomizingAction.RANDOMIZE,
	dataOrganizationXIII: RandomizingAction.RANDOMIZE,
	olympusCups: RandomizingAction.RANDOMIZE,
	hadesCup: Toggle.OFF,
	terra: Toggle.ON,
	sephiroth: Toggle.ON,
	ultimaWeapon: Toggle.ON,
	finalForm: Toggle.ON,
	formAbilities: RandomizingAction.RANDOMIZE,
	growthAbilities: RandomizingAction.RANDOMIZE,
	maxGrowthAbilities: Toggle.ON,
	synthItems: Toggle.ON,
};
