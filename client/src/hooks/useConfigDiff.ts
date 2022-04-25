import {
	Configuration,
	defaultGoAModSettings,
	defaultInclude,
	defaultSettings,
	defaultWorlds,
	GoAModSettings,
} from "kh2fm-randomizer";
import _ from "lodash";
import { useContext, useMemo } from "react";
import { SeedContext } from "../context/seed";

function difference<T>(object: T, base: T) {
	// as any cause I have no idea why it's wrong but it works
	return _.transform<T, T>(object as any, (result, value, key) => {
		const k = key as keyof T;

		if (!_.isEqual(value, base[k])) {
			result[k] =
				_.isObject(value) && _.isObject(base[k])
					? difference(value, base[k] as any)
					: value;
		}
	});
}

export type ConfigDiff = Omit<
	Configuration,
	"name" | "gameMode" | "experimental"
> & {
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
