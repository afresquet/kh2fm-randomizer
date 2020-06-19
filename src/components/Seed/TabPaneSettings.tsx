import { SliderValue } from "antd/lib/slider";
import React, { useCallback, useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { GameMode, Leveling, Toggle } from "../../settings/enums";
import { Settings } from "../../settings/Settings";
import { SettingSelect } from "./SettingSelect";
import { Marks, SettingSlider } from "./SettingSlider";

export const TabPaneSettings: React.FC = () => {
	const {
		settings: [settings, setSettings],
	} = useContext(SeedContext);

	const mapValue = useValueMapper<Settings, SliderValue, "gameMode">([
		settings,
		setSettings,
	]);

	const onChange = useCallback(
		(prop: "criticalMode" | "leveling") => (value: SliderValue) => {
			if (prop === "criticalMode") {
				if (value === Toggle.OFF && settings.leveling === Leveling.LEVEL_ONE) {
					setSettings(current => ({
						...current,
						criticalMode: Toggle.OFF,
						leveling: Leveling.LEVEL_FIFTY,
					}));

					return;
				}
			} else if (prop === "leveling") {
				if (
					value === Leveling.LEVEL_ONE &&
					settings.criticalMode === Toggle.OFF
				) {
					setSettings(current => ({
						...current,
						leveling: Leveling.LEVEL_ONE,
						criticalMode: Toggle.ON,
					}));

					return;
				}
			}

			setSettings(current => ({
				...current,
				[prop]: value,
			}));
		},
		[settings, setSettings]
	);

	return (
		<div className="tab-pane">
			<SettingSelect
				title="Game Mode"
				optionsMap={{
					[GameMode.BASE_GAME]: GameMode.BASE_GAME,
					[GameMode.GOA_MOD]: GameMode.GOA_MOD,
				}}
				value={settings.gameMode}
				disabled
			/>

			<SettingSlider
				title="Critical Mode"
				{...mapValue("criticalMode")}
				onChange={onChange("criticalMode")}
			/>

			<SettingSlider
				title="Leveling"
				marks={{ 0: "Level\xa01", 1: "Level\xa050", 2: "Level\xa099" }}
				{...mapValue("leveling")}
				onChange={onChange("leveling")}
			/>

			<SettingSlider
				title="Level Up Abilities"
				marks={Marks.randomizing}
				disabled={settings.leveling === Leveling.LEVEL_ONE}
				{...mapValue("abilities")}
			/>

			<SettingSlider
				title="Randomize Bonus Modifiers"
				{...mapValue("bonusModifiers")}
			/>

			<SettingSlider
				title="Randomize Stats"
				disabled={settings.leveling === Leveling.LEVEL_ONE}
				{...mapValue("stats")}
			/>
		</div>
	);
};
