import { FormEXP } from "./enums";

export interface Experimental {
	valorEXP: FormEXP;
	wisdomEXP: FormEXP;
	limitEXP: FormEXP;
	masterEXP: FormEXP;
	finalEXP: FormEXP;
}

export const defaultExperimental: Experimental = {
	valorEXP: FormEXP.ONE,
	wisdomEXP: FormEXP.ONE,
	limitEXP: FormEXP.ONE,
	masterEXP: FormEXP.ONE,
	finalEXP: FormEXP.ONE,
};
