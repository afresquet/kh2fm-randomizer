import { Toggle } from "../types/configuration/enums";
import { Patch } from "../types/Patch";

export const fasterPresents: Patch = ({ configuration }) => {
	if (configuration.gameMode.goa.fasterPresents === Toggle.OFF) {
		return "";
	}

	return `
//Fast Gift Wrapping
patch=1,EE,11CA2E78,extended,00004C58
patch=1,EE,21CA2E98,extended,6D2E4C58
patch=1,EE,21CA2E9C,extended,00746573
patch=1,EE,11CA2ED8,extended,00004C58
patch=1,EE,21CA2EF8,extended,6D2E4C58
patch=1,EE,21CA2EFC,extended,00746573
patch=1,EE,11CA2F38,extended,00004C58
patch=1,EE,21CA2F58,extended,6D2E4C58
patch=1,EE,21CA2F5C,extended,00746573
`;
};
