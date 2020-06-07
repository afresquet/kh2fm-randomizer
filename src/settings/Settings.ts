import { GameMode, Leveling, Toggle } from "./enums";

export interface Settings {
	gameMode: GameMode;
	leveling: Leveling;
	stats: Toggle;
	criticalMode: Toggle;
}

export const defaultSettings: Settings = {
	gameMode: GameMode.GOA_MOD,
	leveling: Leveling.LEVEL_FIFTY,
	stats: Toggle.ON,
	criticalMode: Toggle.ON,
};
