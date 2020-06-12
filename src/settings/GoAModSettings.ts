import { Toggle } from "./enums";

export interface GoAModSettings {
	promiseCharm: Toggle;
}

export const defaultGoAModSettings: GoAModSettings = {
	promiseCharm: Toggle.ON,
};
