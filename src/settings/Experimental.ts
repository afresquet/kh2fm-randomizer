import { Multiplier, Toggle } from "./enums";

export interface Experimental {
	expMultiplier: Multiplier;
	goMode: Toggle;
}

export const defaultExperimental: Experimental = {
	expMultiplier: Multiplier.ONE,
	goMode: Toggle.OFF,
};
