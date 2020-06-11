import { message } from "antd";
import { useEffect, useState } from "react";
import { shuffle } from "../helpers/shuffle";
import { Configuration } from "../settings/Configuration";
import { Leveling, Toggle } from "../settings/enums";
import { abilities } from "./abilities";
import { assign } from "./assign";
import { partyMember } from "./partyMember";
import { populate } from "./populate";
import { Seed } from "./Seed";
import { stats } from "./stats";

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

		try {
			const seed: Seed = [];

			const [rewards, rewardLocations] = populate(configuration);

			const shuffledRewards = [...shuffle(rewards, configuration.name)];

			assign(seed, shuffledRewards, rewardLocations, configuration);

			if (configuration.settings.leveling !== Leveling.LEVEL_ONE) {
				seed.push(...abilities(shuffledRewards, configuration));

				if (configuration.settings.stats === Toggle.ON) {
					seed.push(...stats(configuration));
				}
			}

			if (configuration.include.donaldAbilities) {
				seed.push(...partyMember("Donald", configuration));
			}

			if (configuration.include.goofyAbilities) {
				seed.push(...partyMember("Goofy", configuration));
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
	}, [configuration]);

	return state;
};
