import { RandomizingAction } from "./enums";

export interface Experimental {
	keybladeStats: RandomizingAction;
}

export const defaultExperimental: Experimental = {
	keybladeStats: RandomizingAction.VANILLA,
};
