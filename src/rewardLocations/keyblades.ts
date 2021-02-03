import { Rewards } from "../rewards";
import { LocationName } from "../types/LocationName";
import { Reward } from "../types/Reward";
import { RewardLocationType } from "../types/RewardLocation";

export const keybladeRewardLocations: {
	type: RewardLocationType;
	location: LocationName;
	description: string;
	values: { ability: string; stats: string };
	ability: Reward;
	stats: [number, number];
}[] = [
	{
		type: RewardLocationType.KEYBLADE,
		location: "Starting Keyblade" as any,
		description: "Kingdom Key",
		values: {
			ability: "11CDF1D6",
			stats: "21CDF1D8",
		},
		ability: Rewards.DAMAGE_CONTROL,
		stats: [3, 1],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.TWILIGHT_TOWN,
		description: "Oathkeeper",
		values: {
			ability: "11CDF1E6",
			stats: "21CDF1E8",
		},
		ability: Rewards.FORM_BOOST,
		stats: [3, 3],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.TWTNW,
		description: "Oblivion",
		values: {
			ability: "11CDF1F6",
			stats: "21CDF1F8",
		},
		ability: Rewards.DRIVE_BOOST,
		stats: [6, 2],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.TWILIGHT_TOWN,
		description: "Star Seeker",
		values: {
			ability: "11CDF466",
			stats: "21CDF468",
		},
		ability: Rewards.AIR_COMBO_PLUS,
		stats: [3, 1],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.LAND_OF_DRAGONS,
		description: "Hidden Dragon",
		values: {
			ability: "11CDF476",
			stats: "21CDF478",
		},
		ability: Rewards.MP_RAGE,
		stats: [2, 2],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.OLYMPUS,
		description: "Hero's Crest",
		values: {
			ability: "11CDF4A6",
			stats: "21CDF4A8",
		},
		ability: Rewards.AIR_COMBO_BOOST,
		stats: [4, 0],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.TIMELESS_RIVER,
		description: "Monochrome",
		values: {
			ability: "11CDF4B6",
			stats: "21CDF4B8",
		},
		ability: Rewards.ITEM_BOOST,
		stats: [3, 2],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.PORT_ROYAL,
		description: "Follow the Wind",
		values: {
			ability: "11CDF4C6",
			stats: "21CDF4C8",
		},
		ability: Rewards.DRAW,
		stats: [3, 1],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.PRIDE_LANDS,
		description: "Circle of Life",
		values: {
			ability: "11CDF4D6",
			stats: "21CDF4D8",
		},
		ability: Rewards.MP_HASTE,
		stats: [4, 1],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.SPACE_PARANOIDS,
		description: "Photon Debugger",
		values: {
			ability: "11CDF4E6",
			stats: "21CDF4E8",
		},
		ability: Rewards.THUNDER_BOOST,
		stats: [3, 2],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.HOLLOW_BASTION,
		description: "Gull Wing",
		values: {
			ability: "11CDF4F6",
			stats: "21CDF4F8",
		},
		ability: Rewards.EXPERIENCE_BOOST,
		stats: [2, 3],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.BEASTS_CASTLE,
		description: "Rumbling Rose",
		values: {
			ability: "11CDF506",
			stats: "21CDF508",
		},
		ability: Rewards.FINISHING_PLUS,
		stats: [5, 0],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.OLYMPUS,
		description: "Guardian Soul",
		values: {
			ability: "11CDF516",
			stats: "21CDF518",
		},
		ability: Rewards.REACTION_BOOST,
		stats: [5, 1],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.AGRABAH,
		description: "Wishing Lamp",
		values: {
			ability: "11CDF526",
			stats: "21CDF528",
		},
		ability: Rewards.JACKPOT,
		stats: [4, 3],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.HALLOWEEN_TOWN,
		description: "Decisive Pumpkin",
		values: {
			ability: "11CDF536",
			stats: "21CDF538",
		},
		ability: Rewards.COMBO_BOOST,
		stats: [6, 1],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.POOH,
		description: "Sweet Memories",
		values: {
			ability: "11CDF556",
			stats: "21CDF558",
		},
		ability: Rewards.DRIVE_CONVERTER,
		stats: [0, 4],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.ATLANTICA,
		description: "Mysterious Abyss",
		values: {
			ability: "11CDF566",
			stats: "21CDF568",
		},
		ability: Rewards.BLIZZARD_BOOST,
		stats: [3, 3],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.HOLLOW_BASTION,
		description: "Sleeping Lion",
		values: {
			ability: "11CDF546",
			stats: "21CDF548",
		},
		ability: Rewards.COMBO_PLUS,
		stats: [5, 3],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.TWILIGHT_TOWN,
		description: "Bond of Flame",
		values: {
			ability: "11CDF586",
			stats: "21CDF588",
		},
		ability: Rewards.FIRE_BOOST,
		stats: [4, 4],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.OLYMPUS_CUPS,
		description: "Fatal Crest",
		values: {
			ability: "11CDF576",
			stats: "21CDF578",
		},
		ability: Rewards.BERSERK_CHARGE,
		stats: [3, 5],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.TWTNW,
		description: "Two Become One",
		values: {
			ability: "11CDF5F6",
			stats: "21CDF5F8",
		},
		ability: Rewards.LIGHT_AND_DARKNESS,
		stats: [5, 4],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.HOLLOW_BASTION,
		description: "Fenrir",
		values: {
			ability: "11CDF596",
			stats: "21CDF598",
		},
		ability: Rewards.NEGATIVE_COMBO,
		stats: [7, 1],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.SYNTHESIS,
		description: "Ultima Weapon",
		values: {
			ability: "11CDF5A6",
			stats: "21CDF5A8",
		},
		ability: Rewards.MP_HASTEGA,
		stats: [6, 4],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.HOLLOW_BASTION,
		description: "Winner's Proof",
		values: {
			ability: "11CDF606",
			stats: "21CDF608",
		},
		ability: Rewards.NO_EXPERIENCE,
		stats: [5, 7],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.FORM,
		description: "FAKE",
		values: {
			ability: "11CDF3F6",
			stats: "21CDF3F8",
		},
		ability: Rewards.DEFENDER,
		stats: [3, 1],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.FORM,
		description: "Detection Saber",
		values: {
			ability: "11CDF206",
			stats: "21CDF208",
		},
		ability: Rewards.SCAN,
		stats: [4, 2],
	},
	{
		type: RewardLocationType.KEYBLADE,
		location: LocationName.FORM,
		description: "Edge of Ultima",
		values: {
			ability: "11CDF216",
			stats: "21CDF218",
		},
		ability: Rewards.MP_HASTERA,
		stats: [5, 4],
	},
];
