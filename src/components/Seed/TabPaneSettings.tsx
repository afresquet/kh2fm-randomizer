import { Divider } from "antd";
import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { GameMode, Leveling } from "../../settings/enums";
import { Settings } from "../../settings/Settings";
import { SettingSelect } from "./SettingSelect";
import { Marks, SettingSlider } from "./SettingSlider";

const formEXPMarks = { 0: "1x", 1: "2x", 2: "3x", 3: "4x", 4: "5x" };

export const TabPaneSettings: React.FC = () => {
	const {
		settings: [settings, setSettings],
	} = useContext(SeedContext);

	const mapValue = useValueMapper<Settings, SliderValue, "gameMode">([
		settings,
		setSettings,
	]);

	return (
		<>
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
					help="Max level that can contain a check"
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

				<SettingSlider
					title="Randomize Keyblade Stats"
					{...mapValue("keybladeStats")}
					marks={{ 0: "Vanilla", 1: "Balanced", 2: "Boosted" }}
				/>
			</div>

			<Divider />

			<p style={{ textAlign: "center" }}>
				Take the word "multiplier" with a grain of salt. You will be getting the
				same EXP as usual, but the requirements to reach the next level are
				reduced.
			</p>

			<div className="tab-pane">
				<SettingSlider
					title="EXP Multiplier"
					marks={{ 0: "1x", 1: "1.5x", 2: "2x", 3: "3x", 4: "5x" }}
					{...mapValue("expMultiplier")}
				/>

				<SettingSlider
					title="Valor Form EXP Multiplier"
					marks={formEXPMarks}
					{...mapValue("valorEXP")}
				/>

				<SettingSlider
					title="Wisdom Form EXP Multiplier"
					marks={formEXPMarks}
					{...mapValue("wisdomEXP")}
				/>

				<SettingSlider
					title="Limit Form EXP Multiplier"
					marks={formEXPMarks}
					{...mapValue("limitEXP")}
				/>

				<SettingSlider
					title="Master Form EXP Multiplier"
					marks={formEXPMarks}
					{...mapValue("masterEXP")}
				/>

				<SettingSlider
					title="Final Form EXP Multiplier"
					marks={formEXPMarks}
					{...mapValue("finalEXP")}
				/>
			</div>
		</>
	);
};
