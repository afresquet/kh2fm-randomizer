import { Toggle } from "../types/configuration/enums";
import { Patch } from "../types/Patch";

export const earlyLionDash: Patch = ({ configuration }) => {
	if (configuration.gameMode.goa.earlyLionDash === Toggle.OFF) {
		return "";
	}

	return `
// Start with Dash (Lion Sora)
patch=1,EE,1032EF8C,extended,0000820E
patch=1,EE,E001820E,extended,0032EF8E
patch=1,EE,1032EF8E,extended,00000000
`;
};
