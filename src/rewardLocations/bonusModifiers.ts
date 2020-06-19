import { RewardLocationName, RewardLocationType } from "./RewardLocation";

export enum BonusModifier {
	HP = "HP Increase",
	MP = "MP Increase",
	ARMOR = "Armor Slot",
	ACCESSORY = "Accessory Slot",
	ITEM = "Item Slot",
	DRIVE = "Drive Gauge Power Up",
}

export const bonusModifiersRewardLocations: {
	type: RewardLocationType;
	name: RewardLocationName;
	description: string;
	values: { stats: string; slots: string };
	bonuses: BonusModifier[];
}[] = [
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Station of Serenity Nobodies",
		values: {
			stats: "11D10FA2",
			slots: "21D10FA4",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Twilight Thorn",
		values: {
			stats: "11D10CB2",
			slots: "21D10CB4",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Axel I",
		values: {
			stats: "11D11272",
			slots: "21D11274",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.SIMULATED_TWILIGHT_TOWN,
		description: "Axel II",
		values: {
			stats: "11D10CC2",
			slots: "21D10CC4",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.HOLLOW_BASTION,
		description: "Bailey Nobodies",
		values: {
			stats: "11D10E92",
			slots: "21D10E94",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.LAND_OF_DRAGONS,
		description: "Village Cave Heartless",
		values: {
			stats: "11D10DF2",
			slots: "21D10DF4",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.LAND_OF_DRAGONS,
		description: "Shan-Yu",
		values: {
			stats: "11D108C2",
			slots: "21D108C4",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.BEASTS_CASTLE,
		description: "Thresholder",
		values: {
			stats: "11D10752",
			slots: "21D10754",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.BEASTS_CASTLE,
		description: "The Beast",
		values: {
			stats: "11D10942",
			slots: "21D10944",
		},
		bonuses: [BonusModifier.ARMOR],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.BEASTS_CASTLE,
		description: "Dark Thorn",
		values: {
			stats: "11D10782",
			slots: "21D10784",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.OLYMPUS,
		description: "Cerberus",
		values: {
			stats: "11D10802",
			slots: "21D10804",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.OLYMPUS,
		description: "Phil's Training",
		values: {
			stats: "11D10FE2",
			slots: "21D10FE4",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.OLYMPUS,
		description: "Demyx",
		values: {
			stats: "11D10FF2",
			slots: "21D10FF4",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.OLYMPUS,
		description: "Pete",
		values: {
			stats: "11D10822",
			slots: "21D10824",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.OLYMPUS,
		description: "The Hydra",
		values: {
			stats: "11D10852",
			slots: "21D10854",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.DISNEY_CASTLE,
		description: "Queen Minnie Escort",
		values: {
			stats: "11D10D22",
			slots: "21D10D24",
		},
		bonuses: [BonusModifier.ACCESSORY],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TIMELESS_RIVER,
		description: "Steamboat Fight",
		values: {
			stats: "11D10982",
			slots: "21D10984",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TIMELESS_RIVER,
		description: "Pete",
		values: {
			stats: "11D109B2",
			slots: "21D109B4",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.PORT_ROYAL,
		description: "The Interceptor Pirates",
		values: {
			stats: "11D110B2",
			slots: "21D110B4",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.PORT_ROYAL,
		description: "The Interceptor Barrels",
		values: {
			stats: "11D10D32",
			slots: "21D10D34",
		},
		bonuses: [BonusModifier.ITEM],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.PORT_ROYAL,
		description: "Captain Barbossa",
		values: {
			stats: "11D10AA2",
			slots: "21D10AA4",
		},
		bonuses: [BonusModifier.DRIVE],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.AGRABAH,
		description: "Escort Abu",
		values: {
			stats: "11D10DB2",
			slots: "21D10DB4",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.AGRABAH,
		description: "Treasure Room Heartless",
		values: {
			stats: "11D10E52",
			slots: "21D10E54",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.AGRABAH,
		description: "Volcanic Lord & Blizzard Lord",
		values: {
			stats: "11D10CE2",
			slots: "21D10CE4",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.HALLOWEEN_TOWN,
		description: "Prison Keeper",
		values: {
			stats: "11D109E2",
			slots: "21D109E4",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.HALLOWEEN_TOWN,
		description: "Oogie Boogie",
		values: {
			stats: "11D10A22",
			slots: "21D10A24",
		},
		bonuses: [BonusModifier.ITEM],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.PRIDE_LANDS,
		description: "Hyenas I",
		values: {
			stats: "11D10EA2",
			slots: "21D10EA4",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.PRIDE_LANDS,
		description: "Scar",
		values: {
			stats: "11D10BD2",
			slots: "21D10BD4",
		},
		bonuses: [BonusModifier.MP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.SPACE_PARANOIDS,
		description: "Dataspace Computers",
		values: {
			stats: "11D10E12",
			slots: "21D10E14",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.SPACE_PARANOIDS,
		description: "Hostile Program",
		values: {
			stats: "11D10C32",
			slots: "21D10C34",
		},
		bonuses: [BonusModifier.DRIVE],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.HOLLOW_BASTION,
		description: "Demyx",
		values: {
			stats: "11D10BA2",
			slots: "21D10BA4",
		},
		bonuses: [BonusModifier.ARMOR],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.HOLLOW_BASTION,
		description: "1,000 Heartless",
		values: {
			stats: "11D11062",
			slots: "21D11064",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.LAND_OF_DRAGONS,
		description: "Storm Rider",
		values: {
			stats: "11D10902",
			slots: "21D10904",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.BEASTS_CASTLE,
		description: "Xaldin",
		values: {
			stats: "11D107C2",
			slots: "21D107C4",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.OLYMPUS,
		description: "Hades",
		values: {
			stats: "11D10882",
			slots: "21D10884",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.PORT_ROYAL,
		description: "Grim Reaper I",
		values: {
			stats: "11D11022",
			slots: "21D11024",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.PORT_ROYAL,
		description: "Grim Reaper II",
		values: {
			stats: "11D10AE2",
			slots: "21D10AE4",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.AGRABAH,
		description: "Genie Jafar",
		values: {
			stats: "11D10972",
			slots: "21D10974",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.HALLOWEEN_TOWN,
		description: "Lock/Shock/Barrel",
		values: {
			stats: "11D10D72",
			slots: "21D10D74",
		},
		bonuses: [BonusModifier.ITEM],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.HALLOWEEN_TOWN,
		description: "The Experiment",
		values: {
			stats: "11D10A62",
			slots: "21D10A64",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.PRIDE_LANDS,
		description: "Hyenas II",
		values: {
			stats: "11D10ED2",
			slots: "21D10ED4",
		},
		bonuses: [BonusModifier.ACCESSORY],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.PRIDE_LANDS,
		description: "Groundshaker",
		values: {
			stats: "11D10C12",
			slots: "21D10C14",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.SPACE_PARANOIDS,
		description: "Solar Sailor Heartless",
		values: {
			stats: "11D11072",
			slots: "21D11074",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.SPACE_PARANOIDS,
		description: "MCP",
		values: {
			stats: "11D10C72",
			slots: "21D10C74",
		},
		bonuses: [BonusModifier.DRIVE],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TWILIGHT_TOWN,
		description: "The Old Mansion Nobodies",
		values: {
			stats: "11D10FB2",
			slots: "21D10FB4",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TWILIGHT_TOWN,
		description: "Betwixt & Between Nobodies",
		values: {
			stats: "11D110E2",
			slots: "21D110E4",
		},
		bonuses: [],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TWTNW,
		description: "Roxas",
		values: {
			stats: "11D111E2",
			slots: "21D111E4",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TWTNW,
		description: "Xigbar",
		values: {
			stats: "11D10B22",
			slots: "21D10B24",
		},
		bonuses: [BonusModifier.MP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TWTNW,
		description: "Luxord",
		values: {
			stats: "11D10B52",
			slots: "21D10B54",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TWTNW,
		description: "Saix",
		values: {
			stats: "11D10B62",
			slots: "21D10B64",
		},
		bonuses: [BonusModifier.HP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TWTNW,
		description: "Xemnas",
		values: {
			stats: "11D10B92",
			slots: "21D10B94",
		},
		bonuses: [BonusModifier.HP, BonusModifier.MP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.TWTNW,
		description: "Final Xemnas",
		values: {
			stats: "11D11222",
			slots: "21D11224",
		},
		bonuses: [BonusModifier.DRIVE],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.HOLLOW_BASTION,
		description: "Sephiroth",
		values: {
			stats: "11D10CD2",
			slots: "21D10CD4",
		},
		bonuses: [BonusModifier.DRIVE],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Zexion (Absent Silhouette)",
		values: {
			stats: "11D11152",
			slots: "21D11154",
		},
		bonuses: [BonusModifier.ITEM],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Larxene (Absent Silhouette)",
		values: {
			stats: "11D111B2",
			slots: "21D111B4",
		},
		bonuses: [BonusModifier.MP],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Lexaeus (Absent Silhouette)",
		values: {
			stats: "11D11122",
			slots: "21D11124",
		},
		bonuses: [BonusModifier.ACCESSORY],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Marluxia (Absent Silhouette)",
		values: {
			stats: "11D11182",
			slots: "21D11184",
		},
		bonuses: [BonusModifier.DRIVE],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.ABSENT_SILHOUETTE,
		description: "Vexen (Absent Silhouette)",
		values: {
			stats: "11D110F2",
			slots: "21D110F4",
		},
		bonuses: [BonusModifier.ARMOR],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.CAVERN_OF_REMEMBRANCE,
		description: "Transport to Remembrance Nobodies III",
		values: {
			stats: "11D11242",
			slots: "21D11244",
		},
		bonuses: [BonusModifier.ITEM],
	},
	{
		type: RewardLocationType.BONUS,
		name: RewardLocationName.DISNEY_CASTLE,
		description: "Lingering Will",
		values: {
			stats: "11D111F2",
			slots: "21D111F4",
		},
		bonuses: [BonusModifier.DRIVE],
	},
];
