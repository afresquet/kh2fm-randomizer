import { Toggle } from "./enums";

export interface Experimental {
	superbossRetry: Toggle;
}

export const defaultExperimental: Experimental = {
	superbossRetry: Toggle.OFF,
};
