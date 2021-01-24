import { Rewards } from "../rewards";
import { shieldRewards } from "../rewards/shield";
import { staffRewards } from "../rewards/staff";
import { Reward } from "../types/Reward";
import { RewardLocationType } from "../types/RewardLocation";
import { Seed } from "../types/Seed";

const abilities = {
	[Rewards.DONALD_FIRE.name]: {
		slot: "1032E1AA",
		ap: "01CDD20B",
	},
	[Rewards.DONALD_BLIZZARD.name]: {
		slot: "1032E1AC",
		ap: "01CDD223",
	},
	[Rewards.DONALD_THUNDER.name]: {
		slot: "1032E1AE",
		ap: "01CDD23B",
	},
	[Rewards.DONALD_CURE.name]: {
		slot: "1032E1B0",
		ap: "01CDD253",
	},
	[Rewards.GOOFY_TORNADO.name]: {
		slot: "1032E2C0",
		ap: "01CDD26B",
	},
	[Rewards.GOOFY_BASH.name]: {
		slot: "1032E2C2",
		ap: "01CDD283",
	},
	[Rewards.GOOFY_TURBO.name]: {
		slot: "1032E2C4",
		ap: "01CDD29B",
	},
};

const weaponRewards: Reward[] = [
	...Object.values(staffRewards),
	...Object.values(shieldRewards),
];

export function* partyMemberActionAbilities(
	seed: Seed
): IterableIterator<string> {
	const weapons = seed.filter(value => {
		if (
			value.location.type !== RewardLocationType.STAFF &&
			value.location.type !== RewardLocationType.SHIELD
		)
			return false;

		if (!abilities[value.reward.name]) return false;

		return true;
	});

	for (const weapon of weapons) {
		const member =
			weapon.location.type === RewardLocationType.STAFF ? "032E134" : "032E248";
		const slot = abilities[weapon.reward.name].slot;
		const ap = abilities[weapon.reward.name].ap;

		const weaponDigit = weaponRewards.find(
			w => w.name.toLowerCase() === weapon.location.description.toLowerCase()
		)!.value;
		const weaponAbilityAddress = weapon.location.value.substring(1);

		const ability = weapon.reward.value.substring(1);

		yield `
patch=1,EE,E003${weaponDigit},extended,0${member}
patch=1,EE,E0020${ability},extended,0${weaponAbilityAddress}
patch=1,EE,${slot},extended,00008${ability}
patch=1,EE,${ap},extended,00000000
patch=1,EE,E002${weaponDigit},extended,1${member}
patch=1,EE,E0010${ability},extended,0${weaponAbilityAddress}
patch=1,EE,${slot},extended,00000000
`;
	}
}
