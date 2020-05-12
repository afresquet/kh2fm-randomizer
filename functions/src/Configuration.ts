export enum GameMode {
	BASE_GAME,
	GOA_MOD,
}

export interface Configuration {
	seed: string;

	gameMode: GameMode;

	stats: boolean;
	abilities: boolean;
	donaldAbilities: boolean;
	goofyAbilities: boolean;
	formAbilities: boolean;
	criticalMode: boolean;

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
