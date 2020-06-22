import { message } from "antd";
import { useEffect, useState } from "react";
import { filterByWorld } from "../helpers/filterByWorld";
import { shuffle } from "../helpers/shuffle";
import { donaldRewardLocations } from "../rewardLocations/donald";
import { goofyRewardLocations } from "../rewardLocations/goofy";
import { keybladeAbilitiesRewardLocations } from "../rewardLocations/keyblades";
import { Configuration } from "../settings/Configuration";
import { RandomizingAction, Toggle } from "../settings/enums";
import { assign } from "./assign";
import { bonusModifiers } from "./bonusModifiers";
import { populate } from "./populate";
import { randomizePool } from "./randomizePool";
import { Seed } from "./Seed";

type SeedState = { seed: Seed | null; error: any; loading: boolean };

export const useSeed = (configuration: Configuration): SeedState => {
	const [state, setState] = useState<SeedState>({
		seed: null,
		error: null,
		loading: false,
	});

	useEffect(() => {
		if (!configuration.name) {
			setState({
				seed: null,
				error: null,
				loading: false,
			});

			return;
		}

		setState({
			seed: null,
			error: null,
			loading: true,
		});

		const timeoutId = setTimeout(() => {
			try {
				const [rewards, rewardLocations] = populate(configuration);

				const seed = [
					...assign(
						[...shuffle(rewards, configuration.name)],
						rewardLocations,
						configuration
					),
				];

				if (configuration.settings.bonusModifiers === Toggle.ON) {
					seed.push(...bonusModifiers(configuration));
				}

				if (
					configuration.experimental.keybladeAbilities ===
					RandomizingAction.REPLACE
				) {
					seed.push(
						...randomizePool(
							keybladeAbilitiesRewardLocations
								.map(({ values, ability, ...location }) => ({
									...location,
									value: values.ability,
									reward: ability,
								}))
								.filter(filterByWorld(configuration)),
							configuration
						)
					);
				}

				if (configuration.include.donaldAbilities) {
					seed.push(...randomizePool(donaldRewardLocations, configuration));
				}

				if (configuration.include.goofyAbilities) {
					seed.push(...randomizePool(goofyRewardLocations, configuration));
				}

				setState({
					seed,
					error: null,
					loading: false,
				});
			} catch (error) {
				console.error(error);

				if (error.message === "Maximum call stack size exceeded") {
					message.error('Too many "Replace" options!', 10);
				} else {
					message.error(error.message, 10);
				}

				setState({
					seed: null,
					error,
					loading: false,
				});
			}
		}, 500);

		return () => {
			clearTimeout(timeoutId);

			setState({
				seed: null,
				error: null,
				loading: false,
			});
		};
	}, [configuration]);

	return state;
};
