import { bosses } from "./bosses";
import { heartless } from "./heartless";
import { miscellaneous } from "./miscellaneous";
import { mushrooms } from "./mushrooms";
import { nobodies } from "./nobodies";

export const Enemies = {
	...bosses,
	...heartless,
	...nobodies,
	...mushrooms,
	...miscellaneous,
};
