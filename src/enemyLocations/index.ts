import { EnemyType } from "../enemies/Enemy";
import { absentSilhouettesEnemyLocations } from "./absentSilhouettes";
import { agrabahEnemyLocations } from "./agrabah";
import { beastsCastleEnemyLocations } from "./beastsCastle";
import { cavernOfRemembranceEnemyLocations } from "./cavernOfRemembrance";
import { disneyCastleEnemyLocations } from "./disneyCastle";
import { EnemyLocation } from "./EnemyLocation";
import { halloweenTownEnemyLocations } from "./halloweenTown";
import { hollowBastionEnemyLocations } from "./hollowBastion";
import { landOfDragonsEnemyLocations } from "./landOfDragons";
import { olympusEnemyLocations } from "./olympus";
import { organizationXIIIEnemyLocations } from "./organizationXIII";
import { poohEnemyLocations } from "./pooh";
import { portRoyalEnemyLocations } from "./portRoyal";
import { prideLandsEnemyLocations } from "./prideLands";
import { simulatedTwilightTownEnemyLocations } from "./simulatedTwilightTown";
import { spaceParanoidsEnemyLocations } from "./spaceParanoids";
import { timelessRiverEnemyLocations } from "./timelessRiver";
import { twilightTownEnemyLocations } from "./twilightTown";
import { twtnwEnemyLocations } from "./twtnw";

export const enemyLocations: EnemyLocation[] = [
	...absentSilhouettesEnemyLocations,
	...agrabahEnemyLocations,
	...beastsCastleEnemyLocations,
	...cavernOfRemembranceEnemyLocations,
	...disneyCastleEnemyLocations,
	...halloweenTownEnemyLocations,
	...hollowBastionEnemyLocations,
	...landOfDragonsEnemyLocations,
	// ...mushroomsEnemyLocations,
	...olympusEnemyLocations,
	...organizationXIIIEnemyLocations,
	...poohEnemyLocations,
	...portRoyalEnemyLocations,
	...prideLandsEnemyLocations,
	...simulatedTwilightTownEnemyLocations,
	...spaceParanoidsEnemyLocations,
	...timelessRiverEnemyLocations,
	...twilightTownEnemyLocations,
	...twtnwEnemyLocations,
];

export const enemies = enemyLocations.filter(
	location => location.enemy.type !== EnemyType.BOSS
);
export const bosses = enemyLocations.filter(
	location => location.enemy.type === EnemyType.BOSS
);
