import { Toggle } from "./enums";

export interface GoAModSettings {
	promiseCharm: Toggle;
	goMode: Toggle;

	shorterDay5: Toggle;
	fasterOogie: Toggle;
	fasterPresents: Toggle;
	earlyLionDash: Toggle;
	skipDragon: Toggle;

	fieldCamera: Toggle;
	cameraUpDown: Toggle;
	cameraLeftRight: Toggle;
	summonEffects: Toggle;
}

export const defaultGoAModSettings: GoAModSettings = {
	promiseCharm: Toggle.ON,
	goMode: Toggle.OFF,

	shorterDay5: Toggle.ON,
	fasterOogie: Toggle.ON,
	fasterPresents: Toggle.ON,
	earlyLionDash: Toggle.ON,
	skipDragon: Toggle.ON,

	fieldCamera: Toggle.OFF,
	cameraUpDown: Toggle.OFF,
	cameraLeftRight: Toggle.OFF,
	summonEffects: Toggle.ON,
};
