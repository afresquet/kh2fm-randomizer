import { EnemyType } from "./Enemy";

export const bosses = {
	SHAN_YU: {
		size: 2631800,
		type: EnemyType.BOSS,
		name: "Shan-Yu",
		value: "0015",
	},
	AXEL_II: {
		size: 2741104,
		type: EnemyType.BOSS,
		name: "Axel II",
		value: "0051",
		rules: {
			bannedFrom: [
				"Prison Keeper" // He teleports into the hill
			]
		}
	},
	LOCK: {
		size: 599504,
		type: EnemyType.BOSS,
		name: "Lock",
		value: "007F",
	},
	SHOCK: {
		size: 977672,
		type: EnemyType.BOSS,
		name: "Shock",
		value: "0080",
	},
	BARREL: {
		size: 1006700,
		type: EnemyType.BOSS,
		name: "Barrel",
		value: "0081",
	},
	TWILIGHT_THORN: {
		size: 3691716,
		type: EnemyType.BOSS,
		name: "Twilight Thorn",
		value: "0133",
	},
	HADES_I: {
		size: 929856,
		type: EnemyType.BOSS,
		name: "Hades (1st Visit - Hades' Chamber)",
		value: "015D",
		rules: {
			useWhenReplacing: "090E"
		}
	},
	HADES_ESCAPE: {
		size: 1422564,
		type: EnemyType.BOSS,
		name: "Hades (Escape)",
		value: "0812",
		rules: {
			useWhenReplacing: "090E"
		}
	},
	HADES_II: {
		size: 2351052,
		type: EnemyType.BOSS,
		name: "Hades (2nd Visit & Hades Paradox Cup Battle)",
		value: "015E",
		rules: {
			useWhenReplacing: "090E"
		}
	},
	CERBERUS: {
		size: 2494584,
		type: EnemyType.BOSS,
		name: "Cerberus",
		value: "015F",
	},
	HYDRA: {
		size: 2417732,
		type: EnemyType.BOSS,
		name: "Hydra",
		value: "0160",
	},
	THRESHOLDER: {
		size: 1426680,
		type: EnemyType.BOSS,
		name: "Thresholder",
		value: "0161",
	},
	DARK_THORN: {
		size: 2177276,
		type: EnemyType.BOSS,
		name: "Dark Thorn",
		value: "0162",
	},
	SHADOW_STALKER: {
		type: EnemyType.BOSS,
		size: 887908,
		name: "Shadow Stalker",
		value: "0163",
	},
	POSSESSOR: {
		size: 0, // unknown
		type: EnemyType.BOSS,
		name: "Possessor",
		value: "0164",
	},
	STORM_RIDER: {
		size: 2006116,
		type: EnemyType.BOSS,
		name: "Storm Rider",
		value: "0165",
	},
	PETE_TR: {
		size: 968770,
		type: EnemyType.BOSS,
		name: "Pete (Timeless River)",
		value: "0167",
	},
	SHENZI: {
		size: 799588,
		type: EnemyType.BOSS,
		name: "Shenzi",
		value: "0299",
	},
	BANZAI: {
		size: 699684,
		type: EnemyType.BOSS,
		name: "Banzai",
		value: "029A",
	},
	ED: {
		size: 700580,
		type: EnemyType.BOSS,
		name: "Ed",
		value: "029B",
	},
	SCAR: {
		size: 1196392,
		type: EnemyType.BOSS,
		name: "Scar",
		value: "029C",
	},
	THE_BEAST: {
		size: 1657608,
		type: EnemyType.BOSS,
		name: "The Beast",
		value: "02CE",
	},
	SARK: {
		size: 933824,
		type: EnemyType.BOSS,
		name: "Sark",
		value: "035E",
	},
	SARK_LARGE: {
		size: 0, // unknown
		type: EnemyType.BOSS,
		name: "Sark (Large)",
		value: "03C4",
	},
	XALDIN: {
		size: 2741336,
		type: EnemyType.BOSS,
		name: "Xaldin",
		value: "03E5",
	},
	VOLCANIC_LORD: {
		size: 1720178,
		type: EnemyType.BOSS,
		name: "Volcanic Lord",
		value: "040B",
	},
	BLIZZARD_LORD: {
		size: 1191968,
		type: EnemyType.BOSS,
		name: "Blizzard Lord",
		value: "040C",
	},
	// VOLCANIC_LORD: {
	// 	type: EnemyType.BOSS,
	// 	name: "Volcanic Lord",
	// 	value: "062A",
	// },
	// BLIZZARD_LORD: {
	// 	type: EnemyType.BOSS,
	// 	name: "Blizzard Lord",
	// 	value: "062B",
	// },
	HOSTILE_PROGRAM: {
		size: 1276992,
		type: EnemyType.BOSS,
		name: "Hostile Program",
		value: "04B8",
		rules: {
			bannedFrom: [
				"Shan-Yu" // His meter messes with the door meter
			]
		}
	},
	HAYNER: {
		size: 791734,
		type: EnemyType.BOSS,
		name: "Hayner",
		value: "04D7",
	},
	PRISON_KEEPER: {
		size: 2314684,
		type: EnemyType.BOSS,
		name: "Prison Keeper",
		value: "05CE",
		rules: {
			bannedFrom: [
				"Vexen (Absent Silhouette)", // crash reported
				"Vexen (Data)" // crash reported
			]
		}
	},
	THE_EXPERIMENT: {
		size: 3549978,
		type: EnemyType.BOSS,
		name: "The Experiment",
		value: "05D0",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)" // crash reported
			]
		}
	},
	GRIM_REAPER: {
		size: 1499488,
		type: EnemyType.BOSS,
		name: "Grim Reaper",
		value: "010607",
	},
	RIKU: {
		size: 755026,
		type: EnemyType.BOSS,
		name: "Riku",
		value: "063C",
	},
	XEMNAS: {
		size: 2607408,
		type: EnemyType.BOSS,
		name: "Xemnas",
		value: "0646",
	},
	PETE_PAST: {
		size: 896764,
		type: EnemyType.BOSS,
		name: "Pete (Past)",
		value: "0647",
	},
	SEIFER: {
		size: 939680,
		type: EnemyType.BOSS,
		name: "Seifer",
		value: "0678",
	},
	PETE_OC_I: {
		size: 1022460,
		type: EnemyType.BOSS,
		name: "Pete (Olympus Coliseum; Part I)",
		value: "06BB",
	},
	PETE_OC_II: {
		size: 1022968,
		type: EnemyType.BOSS,
		name: "Pete (Olympus Coliseum; Part II)",
		value: "06BC",
		rules: {
			bannedFrom: [
				"Armor Xemnas" // Gets stuck in infinite loop
			]
		}
	},
	SAIX: {
		size: 3557686,
		type: EnemyType.BOSS,
		name: "Saix",
		value: "06C9",
		rules: {
			bannedFrom: [
				"Shan-Yu" // meter messes with door meter
			]
		}
	},
	THE_EXPERIMENT_HEAD: {
		size: 767918,
		type: EnemyType.BOSS,
		name: "The Experiment (Head)",
		value: "0710",
	},
	THE_EXPERIMENT_LEFT_HAND: {
		size: 788874,
		type: EnemyType.BOSS,
		name: "The Experiment (Left Hand)",
		value: "0711",
	},
	THE_EXPERIMENT_RIGHT_HAND: {
		size: 767918,
		type: EnemyType.BOSS,
		name: "The Experiment (Right Hand)",
		value: "0712",
	},
	SHADOW_ROXAS: {
		size: 0, // unknown
		type: EnemyType.BOSS,
		name: "Shadow Roxas",
		value: "0754",
	},
	FINAL_XEMNAS: {
		size: 4536360,
		type: EnemyType.BOSS,
		name: "Final Xemnas",
		value: "01081F",
	},
	SETZER: {
		size: 1330656,
		type: EnemyType.BOSS,
		name: "Setzer",
		value: "082F",
	},
	ARMOR_XEMNAS: {
		size: 1150276,
		type: EnemyType.BOSS,
		name: "Armor Xemnas",
		value: "085C",
	},
	VIVI_STRUGGLE: {
		size: 882418,
		type: EnemyType.BOSS,
		name: "Vivi (Struggle Tournament)",
		value: "086C",
	},
	AXEL_I: {
		size: 1879368,
		type: EnemyType.BOSS,
		name: "Axel I",
		value: "08B5",
	},
	SEPHIROTH: {
		size: 2485952,
		type: EnemyType.BOSS,
		name: "Sephiroth",
		value: "08B6",
	},
	VIVI: {
		size: 0, // unknown
		type: EnemyType.BOSS,
		name: "Vivi",
		value: "0108D0",
	},
	DEMYX_HB: {
		size: 3527072,
		type: EnemyType.BOSS,
		name: "Demyx (Hollow Bastion)",
		value: "08F7",
		// patches: {
		// 	all: [
		// 		{
		// 			name: "No Water Clones Minigame",
		// 			codes: ["20C60358 00000074",
		// 					"20C6035C 00000000",
		// 					"20C60360 00000000",
		// 					"20C60374 00000000",
		// 					"20C60378 00000000"]
		// 		}
		// 	] 
		// }
	},
	LEON: {
		size: 1278612,
		type: EnemyType.BOSS,
		name: "Leon",
		value: "0108F8",
	},
	CLOUD: {
		size: 1642502,
		type: EnemyType.BOSS,
		name: "Cloud",
		value: "0108F9",
	},
	TIFA: {
		size: 1053854,
		type: EnemyType.BOSS,
		name: "Tifa",
		value: "0108FA",
	},
	YUFFIE: {
		size: 755432,
		type: EnemyType.BOSS,
		name: "Yuffie",
		value: "0108FB",
	},
	HADES_CUPS: {
		size: 2347708,
		type: EnemyType.BOSS,
		name: "Hades (Goddess of Fate Cup/Hades Paradox Cup)",
		value: "090E",
	},
	PETE_HPC: {
		size: 1022460,
		type: EnemyType.BOSS,
		name: "Pete (Hades Paradox Cup)",
		value: "090F",
	},
	HERCULES_CUPS: {
		size: 2280296,
		type: EnemyType.BOSS,
		name: "Hercules (Titan Cup/Titan Paradox Cup)",
		value: "0910",
	},
	MARLUXIA_AS: {
		size: 3252168,
		type: EnemyType.BOSS,
		name: "Marluxia (Absent Silhouette)",
		value: "000923",
	},
	MARLUXIA_DATA: {
		size: 3252168,
		type: EnemyType.BOSS,
		name: "Marluxia (Data)",
		value: "010923",
	},
	VEXEN_AS: {
		size: 3042840,
		type: EnemyType.BOSS,
		name: "Vexen (Absent Silhouette)",
		value: "000933",
		rules: {
			bannedFrom: [
				"Shan-Yu" // meter messes with door meter
			],
		},
		patches: {
			all: [
				{
					name: "Don't Load Anti-Sora",
					codes: ["11CBC360 00000000"]
				}
			] 
		}
	},
	VEXEN_DATA: {
		size: 3042840,
		type: EnemyType.BOSS,
		name: "Vexen (Data)",
		value: "010933",
		rules: {
			bannedFrom: [
				"Shan-Yu", // meter messes with door meter
			]
		},
		patches: {
			all: [
				{
					name: "Don't Load Anti-Sora",
					codes: ["11CBC360 00000000"]
				}
			] 
		}
	},
	LEXAEUS_AS: {
		size: 2359752,
		type: EnemyType.BOSS,
		name: "Lexaeus (Absent Silhouette)",
		value: "000935",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)" // hard to beat in time constraint
			]
		}
	},
	LEXAUS_DATA: {
		size: 2359752,
		type: EnemyType.BOSS,
		name: "Lexaus (Data)",
		value: "010935",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)" // hard to beat in time constraint
			]
		}
	},
	ROXAS: {
		size: 3373592,
		type: EnemyType.BOSS,
		name: "Roxas",
		value: "000951",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)", // crash reported
				"Grim Reaper", // DM goes OOB
				"Shan-Yu" // Crash reported on death
			]
		}
	},
	ROXAS_DATA: {
		size: 3373592,
		type: EnemyType.BOSS,
		name: "Roxas (Data)",
		value: "010951",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)", // crash reported
				"Grim Reaper", // DM goes OOB
				"Shan-Yu" // crash reported on death
			]
		}
	},
	LARXENE_AS: {
		size: 3443212,
		type: EnemyType.BOSS,
		name: "Larxene (Absent Silhouette)",
		value: "000962",
		rules: {
			bannedFrom: [
				"Armor Xemnas", // reported as unkillable/tposed
			]
		}
	},
	LARXENE_DATA: {
		size: 3443212,
		type: EnemyType.BOSS,
		name: "Larxene (Data)",
		value: "010962",
		rules: {
			bannedFrom: [
				"Armor Xemnas" // reported as unkillable/tposed
			]
		}
	},
	LINGERING_WILL: {
		size: 2854684,
		type: EnemyType.BOSS,
		name: "Lingering Will (Terra)",
		value: "096F",
		rules: {
			bannedFrom: [
				"Pete (Olympus Coliseum; Part II)", // crashes
				"Volcanic Lord", // likely to crash
				"Blizzard Lord", // likely to crash
				"Armor Xemnas" // crash reported
			]
		}
	},
	ZEXION_AS: {
		size: 2415886,
		type: EnemyType.BOSS,
		name: "Zexion (Absent Silhouette)",
		value: "097B",
	},
	AXEL_DATA: {
		size: 2742180,
		type: EnemyType.BOSS,
		name: "Axel (Data)",
		value: "09C4",
		rules: {
			bannedFrom: [
				"Prison Keeper" // can teleport into hill
			]
		}
	},
	XIGBAR: {
		size: 2061008,
		type: EnemyType.BOSS,
		name: "Xigbar",
		value: "0622",
		rules: {
			bannedFrom: [
				"Roxas", // room transformations get rid of ground
				"Roxas (Data)",
				"Scar", // lion sora can't get out of initial attack
				"Hades (Escape)" // room transformation puts you in center of room unable to leave
			]
		}
	},
	XIGBAR_DATA: {
		size: 2061008,
		type: EnemyType.BOSS,
		name: "Xigbar (Data)",
		value: "09C5",
		rules: {
			bannedFrom: [
				"Roxas", // room transformations get rid of ground
				"Roxas (Data)",
				"Scar", // lion sora can't get out of initial attack
				"Hades (Escape)" // room transformation puts you in center of room unable to leave
			]
		}
	},
	SAIX_DATA: {
		size: 3559034,
		type: EnemyType.BOSS,
		name: "Saïx (Data)",
		value: "09C6",
		rules: {
			bannedFrom: [
				"Shan-Yu", // meter messes with door
				"Scar" // he starts in dm and lion sora can't knock him out
			]
		}
	},
	LUXORD_DATA: {
		size: 3430732,
		type: EnemyType.BOSS,
		name: "Luxord (Data)",
		value: "09C8",
	},
	XEMNAS_DATA: {
		size: 2607964,
		type: EnemyType.BOSS,
		name: "Xemnas (Data)",
		value: "09C9",
	},
	FINAL_XEMNAS_DATA: {
		size: 4538944,
		type: EnemyType.BOSS,
		name: "Final Xemnas (Data)",
		value: "09CA",
	},
	XALDIN_DATA: {
		size: 2741808,
		type: EnemyType.BOSS,
		name: "Xaldin (Data)",
		value: "09CB",
	},
	DEMYX_DATA: {
		size: 3528528,
		type: EnemyType.BOSS,
		name: "Demyx (Data) ",
		value: "09CC",
	},
};
