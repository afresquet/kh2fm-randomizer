export enum RewardType {
	KEYBLADE = "Keyblade",
	SHIELD = "Shield",
	STAFF = "Staff",
	ABILITY = "Ability",
	LIMIT = "Limit",
	SPELL = "Spell",
	FORM = "Form",
	SUMMON = "Summon",
	ITEM = "Item",
	SYNTH_MATERIAL = "Synthesis Material",
	ARMOR = "Armor",
	ACCESSORY = "Accessory",
	MAP = "Map",
	TORNPAGE = "Torn Page",
	REPORT = "Report",
	RECIPE = "Recipe",
	PROOF = "Proof",
	KEY_ITEM = "Key Item",
}

export interface Reward {
	type: RewardType;
	name: string;
	value: string;
}
