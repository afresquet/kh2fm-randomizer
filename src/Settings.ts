export enum GameMode {
	BASE_GAME = "Base Game",
	GOA_MOD = "Garden of Assemblage Mod",
}

export enum Leveling {
	LEVEL_ONE,
	LEVEL_FIFTY,
	LEVEL_NINETY_NINE,
}

export interface Settings {
	gameMode: GameMode;
	leveling: Leveling;
	stats: boolean;
	criticalMode: boolean;
}

export interface Worlds {
	simulatedTwilightTown: boolean;
	twilightTown: boolean;
	hollowBastion: boolean;
	cavernOfRemembrance: boolean;
	beastsCastle: boolean;
	olympus: boolean;
	agrabah: boolean;
	landOfDragons: boolean;
	pooh: boolean;
	atlantica: boolean;
	prideLands: boolean;
	disneyCastle: boolean;
	timelessRiver: boolean;
	halloweenTown: boolean;
	portRoyal: boolean;
	spaceParanoids: boolean;
	twtnw: boolean;
}

export interface Include {
	abilities: boolean;
	donaldAbilities: boolean;
	goofyAbilities: boolean;
	organizationXIII: boolean;
	olympusCups: boolean;
	ultimaWeapon: boolean;
	finalForm: boolean;
	formAbilities: boolean;
	growthAbilities: boolean;
	maxGrowthAbilities: boolean;
	synthItems: boolean;
}

export interface GoAModSettings {
	promiseCharm: boolean;
}
