import { Toggle } from "../types/configuration/enums";
import { Patch } from "../types/Patch";

export const fasterOogie: Patch = ({ configuration }) => {
	if (configuration.gameMode.goa.fasterOogie === Toggle.OFF) {
		return "";
	}

	return `
//Oogie Boogie HP Barrier Removal 1
patch=1,EE,E005090E,extended,0032BAE0
patch=1,EE,E0040037,extended,0032BAE4
patch=1,EE,E0030037,extended,0032BAE6
patch=1,EE,E0020037,extended,0032BAE8
patch=1,EE,E0010173,extended,01C6C01C
patch=1,EE,11C6C020,extended,00000000
//Oogie Boogie HP Barrier Removal 2
patch=1,EE,E005090E,extended,0032BAE0
patch=1,EE,E0040037,extended,0032BAE4
patch=1,EE,E0030037,extended,0032BAE6
patch=1,EE,E0020037,extended,0032BAE8
patch=1,EE,E0010173,extended,01C6C284
patch=1,EE,11C6C288,extended,00000000
//Oogie Boogie HP Barrier Removal 3
patch=1,EE,E005090E,extended,0032BAE0
patch=1,EE,E0040037,extended,0032BAE4
patch=1,EE,E0030037,extended,0032BAE6
patch=1,EE,E0020037,extended,0032BAE8
patch=1,EE,E0010173,extended,01C6C4EC
patch=1,EE,11C6C4F0,extended,00000000
`;
};
