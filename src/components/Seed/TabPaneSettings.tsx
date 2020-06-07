import React from "react";
import { GameMode } from "../../Settings";
import { SettingSelect } from "./SettingSelect";
import { SettingSlider } from "./SettingSlider";

interface Props {}

export const TabPaneSettings: React.FC<Props> = () => {
	return (
		<div className="tab-pane">
			<SettingSelect
				title="Game Mode"
				optionsMap={{
					[GameMode.BASE_GAME]: GameMode.BASE_GAME,
					[GameMode.GOA_MOD]: GameMode.GOA_MOD,
				}}
				defaultValue={GameMode.GOA_MOD}
				disabled
			/>

			<SettingSlider
				title="Leveling"
				marks={{ 0: "Level\xa01", 1: "Level\xa050", 2: "Level\xa099" }}
				defaultValue={1}
			/>

			<SettingSlider title="Randomize Stats" />

			<SettingSlider title="Critical Mode" />
		</div>
	);
};
