import { Toggle } from "../types/configuration/enums";
import { Patch } from "../types/Patch";

export const fastHyenasTwo: Patch = ({ configuration }) => {
	if (configuration.gameMode.goa.fastHyenasTwo === Toggle.OFF) {
		return "";
	}

	return `
//Fast Hyenas II 1
patch=1,EE,E003050A,extended,0032BAE0
patch=1,EE,E0020039,extended,0032BAE8
patch=1,EE,E0010087,extended,01D48EFC
patch=1,EE,11D48EFC,extended,000000EC
//Fast Hyenas II 2
patch=1,EE,E003050A,extended,0032BAE0
patch=1,EE,E0020039,extended,0032BAE8
patch=1,EE,11C4EDB4,extended,00000000
patch=1,EE,11C4EDF4,extended,00000000
`;
};
