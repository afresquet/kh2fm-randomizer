import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { GameMode } from "../../settings/enums";
import { Settings } from "../../settings/Settings";
import { SettingSelect } from "./SettingSelect";
import { SettingSlider } from "./SettingSlider";

export const TabPaneSettings: React.FC = () => {
	const { settings } = useContext(SeedContext);

	const mapValue = useValueMapper<Settings, SliderValue, "gameMode">(settings);

	return (
		<div className="tab-pane">
			<SettingSelect
				title="Game Mode"
				optionsMap={{
					[GameMode.BASE_GAME]: GameMode.BASE_GAME,
					[GameMode.GOA_MOD]: GameMode.GOA_MOD,
				}}
				value={settings[0].gameMode}
				disabled
			/>

			<SettingSlider
				title="Leveling"
				marks={{ 0: "Level\xa01", 1: "Level\xa050", 2: "Level\xa099" }}
				{...mapValue("leveling")}
			/>

			<SettingSlider title="Randomize Stats" {...mapValue("stats")} />

			<SettingSlider title="Critical Mode" {...mapValue("criticalMode")} />
		</div>
	);
};
