import { LocationName } from "../LocationName";
import { Rewards } from "../rewards";
import { Reward } from "../rewards/Reward";
import { RewardLocationType } from "./RewardLocation";

export const keybladeAbilitiesRewardLocations: {
	type: RewardLocationType;
	name: LocationName;
	description: string;
	values: { ability: string; stats: string };
	ability: Reward;
}[] = [
	{
		type: RewardLocationType.KEYBLADE,
		name: "Starting Keyblade" as any,
		description: "Kingdom Key",
		values: {
			ability: "11CDF1D6",
			stats: "21CDF1D8",
		},
		ability: Rewards.DAMAGE_CONTROL,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.TWILIGHT_TOWN,
		description: "Oathkeeper",
		values: {
			ability: "11CDF1E6",
			stats: "21CDF1E8",
		},
		ability: Rewards.FORM_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.TWTNW,
		description: "Oblivion",
		values: {
			ability: "11CDF1F6",
			stats: "21CDF1F8",
		},
		ability: Rewards.DRIVE_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.TWILIGHT_TOWN,
		description: "Star Seeker",
		values: {
			ability: "11CDF466",
			stats: "21CDF468",
		},
		ability: Rewards.AIR_COMBO_PLUS,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.LAND_OF_DRAGONS,
		description: "Hidden Dragon",
		values: {
			ability: "11CDF476",
			stats: "21CDF478",
		},
		ability: Rewards.MP_RAGE,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.OLYMPUS,
		description: "Hero's Crest",
		values: {
			ability: "11CDF4A6",
			stats: "21CDF4A8",
		},
		ability: Rewards.AIR_COMBO_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.TIMELESS_RIVER,
		description: "Monochrome",
		values: {
			ability: "11CDF4B6",
			stats: "21CDF4B8",
		},
		ability: Rewards.ITEM_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.PORT_ROYAL,
		description: "Follow the Wind",
		values: {
			ability: "11CDF4C6",
			stats: "21CDF4C8",
		},
		ability: Rewards.DRAW,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.PRIDE_LANDS,
		description: "Circle of Life",
		values: {
			ability: "11CDF4D6",
			stats: "21CDF4D8",
		},
		ability: Rewards.MP_HASTE,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.SPACE_PARANOIDS,
		description: "Photon Debugger",
		values: {
			ability: "11CDF4E6",
			stats: "21CDF4E8",
		},
		ability: Rewards.THUNDER_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.HOLLOW_BASTION,
		description: "Gull Wing",
		values: {
			ability: "11CDF4F6",
			stats: "21CDF4F8",
		},
		ability: Rewards.EXPERIENCE_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.BEASTS_CASTLE,
		description: "Rumbling Rose",
		values: {
			ability: "11CDF506",
			stats: "21CDF508",
		},
		ability: Rewards.FINISHING_PLUS,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.OLYMPUS,
		description: "Guardian Soul",
		values: {
			ability: "11CDF516",
			stats: "21CDF518",
		},
		ability: Rewards.REACTION_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.AGRABAH,
		description: "Wishing Lamp",
		values: {
			ability: "11CDF526",
			stats: "21CDF528",
		},
		ability: Rewards.JACKPOT,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.HALLOWEEN_TOWN,
		description: "Decisive Pumpkin",
		values: {
			ability: "11CDF536",
			stats: "21CDF538",
		},
		ability: Rewards.COMBO_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.POOH,
		description: "Sweet Memories",
		values: {
			ability: "11CDF556",
			stats: "21CDF558",
		},
		ability: Rewards.DRIVE_CONVERTER,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.ATLANTICA,
		description: "Mysterious Abyss",
		values: {
			ability: "11CDF566",
			stats: "21CDF568",
		},
		ability: Rewards.BLIZZARD_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.HOLLOW_BASTION,
		description: "Sleeping Lion",
		values: {
			ability: "11CDF546",
			stats: "21CDF548",
		},
		ability: Rewards.COMBO_PLUS,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.TWILIGHT_TOWN,
		description: "Bond of Flame",
		values: {
			ability: "11CDF586",
			stats: "21CDF588",
		},
		ability: Rewards.FIRE_BOOST,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.OLYMPUS_CUPS,
		description: "Fatal Crest",
		values: {
			ability: "11CDF576",
			stats: "21CDF578",
		},
		ability: Rewards.BERSERK_CHARGE,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.TWTNW,
		description: "Two Become One",
		values: {
			ability: "11CDF5F6",
			stats: "21CDF5F8",
		},
		ability: Rewards.LIGHT_AND_DARKNESS,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.HOLLOW_BASTION,
		description: "Fenrir",
		values: {
			ability: "11CDF596",
			stats: "21CDF598",
		},
		ability: Rewards.NEGATIVE_COMBO,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.SYNTHESIS,
		description: "Ultima Weapon",
		values: {
			ability: "11CDF5A6",
			stats: "21CDF5A8",
		},
		ability: Rewards.MP_HASTEGA,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.HOLLOW_BASTION,
		description: "Winner's Proof",
		values: {
			ability: "11CDF606",
			stats: "21CDF608",
		},
		ability: Rewards.NO_EXPERIENCE,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.FORM,
		description: "FAKE",
		values: {
			ability: "11CDF3F6",
			stats: "21CDF3F8",
		},
		ability: Rewards.DEFENDER,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.FORM,
		description: "Detection Saber",
		values: {
			ability: "11CDF206",
			stats: "21CDF208",
		},
		ability: Rewards.SCAN,
	},
	{
		type: RewardLocationType.KEYBLADE,
		name: LocationName.FORM,
		description: "Edge of Ultima",
		values: {
			ability: "11CDF216",
			stats: "21CDF218",
		},
		ability: Rewards.MP_HASTERA,
	},
];
