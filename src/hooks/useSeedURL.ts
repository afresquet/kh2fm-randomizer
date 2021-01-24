import _ from "lodash";
import { useContext, useMemo } from "react";
import { SeedContext } from "../context/seed";
import { useConfigDiff } from "./useConfigDiff";

export const useSeedURL = (): { url: string; urlWithSettings: string } => {
	const {
		seedName: { name },
	} = useContext(SeedContext);

	const diff = useConfigDiff();

	const params = useMemo(
		() =>
			Object.entries(diff).reduce((result, [key, values]) => {
				if (_.isEmpty(values)) return result;

				const delimiter = result === "" ? "?" : "&";

				const string = encodeURIComponent(JSON.stringify(values));

				return `${result}${delimiter}${key}=${string}`;
			}, ""),
		[diff]
	);

	return {
		url: `/seed/${encodeURIComponent(name)}`,
		urlWithSettings: `/seed/${encodeURIComponent(name)}${params}`,
	};
};
