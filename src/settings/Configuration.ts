import { GameMode } from "./enums";
import { Experimental } from "./Experimental";
import { GoAModSettings } from "./GoAModSettings";
import { Include } from "./Include";
import { Settings } from "./Settings";
import { Worlds } from "./Worlds";

export interface Configuration {
	name: string;
	settings: Settings;
	worlds: Worlds;
	include: Include;
	experimental: Experimental;
	gameMode: {
		mode: GameMode;
		goa: GoAModSettings;
	};
}
