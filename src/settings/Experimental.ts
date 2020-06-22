import { RandomizingAction } from "./enums";

export interface Experimental {
	keybladeAbilities: RandomizingAction;
}

export const defaultExperimental: Experimental = {
	keybladeAbilities: RandomizingAction.VANILLA,
};
