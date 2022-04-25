import { RandomizingAction } from "./enums";

export interface Worlds {
	simulatedTwilightTown: RandomizingAction;
	twilightTown: RandomizingAction;
	hollowBastion: RandomizingAction;
	cavernOfRemembrance: RandomizingAction;
	beastsCastle: RandomizingAction;
	olympus: RandomizingAction;
	agrabah: RandomizingAction;
	landOfDragons: RandomizingAction;
	pooh: RandomizingAction;
	atlantica: RandomizingAction;
	prideLands: RandomizingAction;
	disneyCastle: RandomizingAction;
	timelessRiver: RandomizingAction;
	halloweenTown: RandomizingAction;
	portRoyal: RandomizingAction;
	spaceParanoids: RandomizingAction;
	twtnw: RandomizingAction;
}

export const defaultWorlds: Worlds = {
	simulatedTwilightTown: RandomizingAction.RANDOMIZE,
	twilightTown: RandomizingAction.RANDOMIZE,
	hollowBastion: RandomizingAction.RANDOMIZE,
	cavernOfRemembrance: RandomizingAction.RANDOMIZE,
	beastsCastle: RandomizingAction.RANDOMIZE,
	olympus: RandomizingAction.RANDOMIZE,
	agrabah: RandomizingAction.RANDOMIZE,
	landOfDragons: RandomizingAction.RANDOMIZE,
	pooh: RandomizingAction.RANDOMIZE,
	atlantica: RandomizingAction.REPLACE,
	prideLands: RandomizingAction.RANDOMIZE,
	disneyCastle: RandomizingAction.RANDOMIZE,
	timelessRiver: RandomizingAction.RANDOMIZE,
	halloweenTown: RandomizingAction.RANDOMIZE,
	portRoyal: RandomizingAction.RANDOMIZE,
	spaceParanoids: RandomizingAction.RANDOMIZE,
	twtnw: RandomizingAction.RANDOMIZE,
};
