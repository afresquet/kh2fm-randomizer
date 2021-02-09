import { Toggle } from "./enums";

export interface GoAModSettings {
	promiseCharm: Toggle;
	goMode: Toggle;

	shorterDay5: Toggle;
	fasterTwilightThorn: Toggle;
	fasterOogie: Toggle;
	fasterPresents: Toggle;
	earlyLionDash: Toggle;
	fastHyenasTwo: Toggle;
	fasterMCP: Toggle;
	fasterABlusteryRescue: Toggle;
	fasterHunnySlider: Toggle;
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
	fasterTwilightThorn: Toggle.ON,
	fasterOogie: Toggle.ON,
	fasterPresents: Toggle.ON,
	earlyLionDash: Toggle.ON,
	fastHyenasTwo: Toggle.ON,
	fasterMCP: Toggle.ON,
	fasterABlusteryRescue: Toggle.ON,
	fasterHunnySlider: Toggle.ON,
	skipDragon: Toggle.ON,

	fieldCamera: Toggle.OFF,
	cameraUpDown: Toggle.OFF,
	cameraLeftRight: Toggle.OFF,
	summonEffects: Toggle.ON,
};
