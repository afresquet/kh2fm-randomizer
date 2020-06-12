import _ from "lodash";
import { useContext, useMemo } from "react";
import { SeedContext } from "../context/seed";
import { Configuration } from "../settings/Configuration";
import {
	defaultGoAModSettings,
	GoAModSettings,
} from "../settings/GoAModSettings";
import { defaultInclude } from "../settings/Include";
import { defaultSettings } from "../settings/Settings";
import { defaultWorlds } from "../settings/Worlds";

function difference<T>(object: T, base: T) {
	// as any cause I have no idea why it's wrong but it works
	return _.transform<T, T>(object as any, (result, value, key) => {
		if (!_.isEqual(value, base[key])) {
			result[key] =
				_.isObject(value) && _.isObject(base[key])
					? difference(value, base[key])
					: value;
		}
	});
}

export type ConfigDiff = Omit<Configuration, "name" | "gameMode"> & {
	goa: GoAModSettings;
};

export const useConfigDiff = (): ConfigDiff => {
	const { configuration } = useContext(SeedContext);

	return useMemo(
		() => ({
			settings: difference(configuration.settings, defaultSettings),
			worlds: difference(configuration.worlds, defaultWorlds),
			include: difference(configuration.include, defaultInclude),
			goa: difference(configuration.gameMode.goa, defaultGoAModSettings),
		}),
		[
			configuration.settings,
			configuration.worlds,
			configuration.include,
			configuration.gameMode.goa,
		]
	);
};
