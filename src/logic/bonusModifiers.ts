import seedrandom from "seedrandom";
import { filterByWorld } from "../helpers/filterByWorld";
import { shuffle } from "../helpers/shuffle";
import { bonusModifiersRewardLocations } from "../rewardLocations/bonusModifiers";
import { Rewards } from "../rewards";
import { Configuration } from "../types/configuration/Configuration";
import { RandomizingAction, Toggle } from "../types/configuration/enums";
import { LocationName } from "../types/LocationName";
import { Reward } from "../types/Reward";
import { SeedItem } from "../types/Seed";

export function* bonusModifiers(
	configuration: Configuration
): IterableIterator<SeedItem> {
	const filterer = filterByWorld(configuration);
	const activeLocations = bonusModifiersRewardLocations

		.filter(location => {
			if (
				configuration.include.absentSilhouettes !==
					RandomizingAction.RANDOMIZE &&
				location.name === LocationName.ABSENT_SILHOUETTE
			)
				return false;

			if (
				configuration.include.terra === Toggle.OFF &&
				location.description === "Lingering Will"
			)
				return false;

			if (
				configuration.include.sephiroth === Toggle.OFF &&
				location.description === "Sephiroth"
			)
				return false;

			return filterer(location as any);
		})
		.reverse();

	const upgrades = [
		...shuffle(
			activeLocations.reduce<Reward[]>(
				(acc, location) => acc.concat(location.bonuses),
				[]
			),
			configuration.name
		),
	];
	const locations = activeLocations.filter(
		location => location.bonuses.length > 0
	);

	for (const location of locations) {
		const values = {
			[Rewards.HP_UP.name]: false,
			[Rewards.MP_UP.name]: false,
			[Rewards.DRIVE_UP.name]: false,
			[Rewards.ACCESSORY_UP.name]: false,
			[Rewards.ARMOR_UP.name]: false,
			[Rewards.ITEM_UP.name]: false,
		};

		for (let i = 0; i < location.bonuses.length; i++) {
			let iteration = 0;
			let loop = true;

			while (loop) {
				const seeder = seedrandom(
					configuration.name +
						location.values.stats +
						location.values.slots +
						i +
						iteration
				);
				const index = Math.floor(seeder() * upgrades.length);

				if (values[upgrades[index].name]) {
					iteration++;
					continue;
				}

				const bonus = upgrades.splice(index, 1)[0];

				values[bonus.name] = true;

				loop = false;
			}
		}

		const locationRewardName = location.bonuses
			.map(x => x.name)
			.reduce((acc, x) => `${acc}, ${x}`);

		const rewardName = [
			Rewards.HP_UP.name,
			Rewards.MP_UP.name,
			Rewards.DRIVE_UP.name,
			Rewards.ACCESSORY_UP.name,
			Rewards.ARMOR_UP.name,
			Rewards.ITEM_UP.name,
		]
			.filter(x => values[x])
			.reduce((acc, x) => (acc === "" ? x : `${acc}, ${x}`), "");

		yield {
			location: {
				type: location.type,
				location: location.name,
				description: location.description,
				reward: { name: locationRewardName } as any,
				value: location.values.stats,
			},
			reward: {
				name: rewardName,
				value: `0000${values[Rewards.MP_UP.name] ? Rewards.MP_UP.value : "00"}${
					values[Rewards.HP_UP.name] ? Rewards.HP_UP.value : "00"
				}`,
			} as any,
		};

		yield {
			location: {
				type: location.type,
				location: location.name,
				description: location.description,
				reward: { name: locationRewardName } as any,
				value: location.values.slots,
			},
			reward: {
				name: rewardName,
				value: `${
					values[Rewards.ARMOR_UP.name] ? Rewards.ARMOR_UP.value : "00"
				}${
					values[Rewards.ACCESSORY_UP.name] ? Rewards.ACCESSORY_UP.value : "00"
				}${values[Rewards.ITEM_UP.name] ? Rewards.ITEM_UP.value : "00"}${
					values[Rewards.DRIVE_UP.name] ? Rewards.DRIVE_UP.value : "00"
				}`,
			} as any,
		};
	}
}
