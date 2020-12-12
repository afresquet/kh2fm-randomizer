import {
	GameMode,
	Leveling,
	Multiplier,
	RandomizingAction,
	Toggle,
} from "./enums";

export interface Settings {
	gameMode: GameMode;
	leveling: Leveling;
	abilities: RandomizingAction;
	stats: Toggle;
	keybladeStats: RandomizingAction;
	bonusModifiers: Toggle;
	criticalMode: Toggle;
	reportDepth: RandomizingAction;

	expMultiplier: Multiplier;
	valorEXP: Multiplier;
	wisdomEXP: Multiplier;
	limitEXP: Multiplier;
	masterEXP: Multiplier;
	finalEXP: Multiplier;
}

export const defaultSettings: Settings = {
	gameMode: GameMode.GOA_MOD,
	leveling: Leveling.LEVEL_FIFTY,
	abilities: RandomizingAction.RANDOMIZE,
	stats: Toggle.ON,
	keybladeStats: RandomizingAction.REPLACE,
	bonusModifiers: Toggle.ON,
	criticalMode: Toggle.ON,
	reportDepth: RandomizingAction.RANDOMIZE,

	expMultiplier: Multiplier.ONE,
	valorEXP: Multiplier.ONE,
	wisdomEXP: Multiplier.ONE,
	limitEXP: Multiplier.ONE,
	masterEXP: Multiplier.ONE,
	finalEXP: Multiplier.ONE,
};
