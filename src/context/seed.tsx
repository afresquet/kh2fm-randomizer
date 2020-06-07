import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useSeedName } from "../hooks/useSeedName";
import {
	defaultGoAModSettings,
	GoAModSettings,
} from "../settings/GoAModSettings";
import { defaultInclude, Include } from "../settings/Include";
import { defaultSettings, Settings } from "../settings/Settings";
import { defaultWorlds, Worlds } from "../settings/Worlds";

interface SeedContextType {
	seed: {
		seed: string;
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
		onRandomSeed: () => void;
	};
	settings: [Settings, React.Dispatch<React.SetStateAction<Settings>>];
	worlds: [Worlds, React.Dispatch<React.SetStateAction<Worlds>>];
	include: [Include, React.Dispatch<React.SetStateAction<Include>>];
	gameMode: {
		goa: [GoAModSettings, React.Dispatch<React.SetStateAction<GoAModSettings>>];
	};
}

export const SeedContext = React.createContext<SeedContextType>({} as any);

export const SeedContextProvider: React.FC = ({ children }) => {
	const { params } = useRouteMatch<{ seed: string }>();

	const seed = useSeedName(params.seed);

	const settings = useState<Settings>(defaultSettings);

	const worlds = useState<Worlds>(defaultWorlds);

	const include = useState<Include>(defaultInclude);

	const goa = useState<GoAModSettings>(defaultGoAModSettings);

	return (
		<SeedContext.Provider
			value={{ seed, settings, worlds, include, gameMode: { goa } }}
		>
			{children}
		</SeedContext.Provider>
	);
};
