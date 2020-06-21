import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { GameMode, Leveling } from "../../settings/enums";
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

			<SettingSlider title="Critical Mode" {...mapValue("criticalMode")} />

			<SettingSlider
				title="Leveling"
				marks={{ 0: "Level\xa01", 1: "Level\xa050", 2: "Level\xa099" }}
				{...mapValue("leveling")}
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
