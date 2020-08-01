import { Toggle } from "./enums";

export interface Experimental {
	enemies: Toggle;
	bosses: Toggle;

	superbossRetry: Toggle;
}

export const defaultExperimental: Experimental = {
	enemies: Toggle.OFF,
	bosses: Toggle.OFF,

	superbossRetry: Toggle.OFF,
};
