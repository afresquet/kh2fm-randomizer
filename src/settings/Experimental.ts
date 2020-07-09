import { Toggle } from "./enums";

export interface Experimental {
	enemies: Toggle;
	bosses: Toggle;
}

export const defaultExperimental: Experimental = {
	enemies: Toggle.OFF,
	bosses: Toggle.OFF,
};
