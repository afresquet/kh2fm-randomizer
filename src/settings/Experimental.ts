import { Toggle } from "./enums";

export interface Experimental {
	bonusModifiers: Toggle;
}

export const defaultExperimental: Experimental = {
	bonusModifiers: Toggle.OFF,
};
