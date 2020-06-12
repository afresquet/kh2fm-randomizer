import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { ConfigDiff } from "./useConfigDiff";

export const useConfigQuery = () => {
	const location = useLocation();

	const string = queryString.parse(location.search);

	return Object.entries(string).reduce((result, [key, value]) => {
		return {
			...result,
			[key]: JSON.parse(value as string),
		};
	}, {}) as Partial<ConfigDiff>;
};
