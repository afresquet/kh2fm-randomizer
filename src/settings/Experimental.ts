import { Toggle } from "./enums";

export interface Experimental {
	goMode: Toggle;
}

export const defaultExperimental: Experimental = {
	goMode: Toggle.OFF,
};
