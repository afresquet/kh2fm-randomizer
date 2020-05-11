export enum RewardType {
	KEYBLADE = "keyblade",
	SHIELD = "shield",
	STAFF = "staff",
	ABILITY = "ability",
	LIMIT = "limit",
	SPELL = "spell",
	FORM = "form",
	SUMMON = "summon",
	ITEM = "item",
	ARMOR = "armor",
	ACCESSORY = "accessory",
	MAP = "map",
	TORNPAGE = "tornpage",
	REPORT = "report",
	RECIPE = "recipe",
	PROOF = "proof",
	MISCELLANEOUS = "miscellaneous",
}

export interface Reward {
	type: RewardType;
	name: string;
	value: string;
}
