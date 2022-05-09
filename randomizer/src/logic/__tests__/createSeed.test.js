const { createSeed } = require("../createSeed");

describe("createSeed", () => {
	const configuration = {
		name: "cbtovc5841i5g8xwlmqvvs",
		settings: {
			gameMode: "Garden of Assemblage Mod",
			leveling: 1,
			abilities: 2,
			stats: 1,
			keybladeStats: 1,
			bonusModifiers: 1,
			criticalMode: 1,
			reportDepth: 2,
			expMultiplier: 0,
			valorEXP: 0,
			wisdomEXP: 0,
			limitEXP: 0,
			masterEXP: 0,
			finalEXP: 0,
		},
		worlds: {
			simulatedTwilightTown: 2,
			twilightTown: 2,
			hollowBastion: 2,
			cavernOfRemembrance: 2,
			beastsCastle: 2,
			olympus: 2,
			agrabah: 2,
			landOfDragons: 2,
			pooh: 2,
			atlantica: 1,
			prideLands: 2,
			disneyCastle: 2,
			timelessRiver: 2,
			halloweenTown: 2,
			portRoyal: 2,
			spaceParanoids: 2,
			twtnw: 2,
		},
		include: {
			keybladeAbilities: 1,
			donaldAbilities: 1,
			goofyAbilities: 1,
			absentSilhouettes: 2,
			dataOrganizationXIII: 2,
			olympusCups: 2,
			hadesCup: 0,
			terra: 1,
			sephiroth: 1,
			ultimaWeapon: 1,
			finalForm: 1,
			formAbilities: 2,
			growthAbilities: 2,
			maxGrowthAbilities: 1,
			synthItems: 1,
		},
		experimental: { superbossRetry: 0 },
		gameMode: {
			mode: "Garden of Assemblage Mod",
			goa: {
				promiseCharm: 1,
				goMode: 0,
				shorterDay5: 1,
				fasterOogie: 1,
				fasterPresents: 1,
				earlyLionDash: 1,
				fastHyenasTwo: 1,
				skipDragon: 1,
				fieldCamera: 0,

				cameraUpDown: 0,
				cameraLeftRight: 0,
				summonEffects: 1,
			},
		},
	};

	test.only("it should have the missing Keyblades (issue #39)", () => {
		const keyblades = [
			"Kingdom Key",
			"Fatal Crest",
			"Ultima Weapon",
			"FAKE",
			"Detection Saber",
			"Edge of Ultima",
		];

		const seed = createSeed(configuration);

		const missingKeyblades = seed.filter(item =>
			keyblades.includes(item.location.description)
		);

		expect(missingKeyblades).toHaveLength(keyblades.length);
	});
});
