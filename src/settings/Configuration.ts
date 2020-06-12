import { GameMode } from "./enums";
import { GoAModSettings } from "./GoAModSettings";
import { Include } from "./Include";
import { Settings } from "./Settings";
import { Worlds } from "./Worlds";

export interface Configuration {
	name: string;
	settings: Settings;
	worlds: Worlds;
	include: Include;
	gameMode: {
		mode: GameMode;
		goa: GoAModSettings;
	};
}
