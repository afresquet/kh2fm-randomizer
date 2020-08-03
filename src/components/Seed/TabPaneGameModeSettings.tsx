import { Divider } from "antd";
import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { Leveling, Toggle } from "../../settings/enums";
import { GoAModSettings } from "../../settings/GoAModSettings";
import { SettingSlider } from "./SettingSlider";

export const TabPaneGameModeSettings: React.FC = () => {
	const {
		configuration,
		gameMode: { goa },
	} = useContext(SeedContext);

	const mapValue = useValueMapper<GoAModSettings, SliderValue>(goa);

	return (
		<>
			<div className="tab-pane">
				<SettingSlider
					title="Promise Charm"
					help="Item that lets you skip TWTNW if you have all 3 proofs"
					{...mapValue("promiseCharm")}
				/>

				<SettingSlider
					title="Go Mode"
					help="You start with Gold Crown"
					{...mapValue("goMode")}
					disabled={
						configuration.settings.criticalMode === Toggle.OFF &&
						configuration.settings.leveling === Leveling.LEVEL_ONE
					}
				/>
			</div>

			<Divider />

			<div className="tab-pane">
				<SettingSlider
					title="Shorter Day 5 (Simulated Twilight Town)"
					help="Lets you skip the 'Wonders missions' on Roxas' Day 5"
					{...mapValue("shorterDay5")}
				/>

				<SettingSlider
					title="Faster Oogie Boogie"
					{...mapValue("fasterOogie")}
				/>

				<SettingSlider
					title="Faster Presents"
					{...mapValue("fasterPresents")}
				/>

				<SettingSlider title="Early Lion Dash" {...mapValue("earlyLionDash")} />

				<SettingSlider title="Skip Dragon Xemnas" {...mapValue("skipDragon")} />
			</div>

			<Divider />

			<div className="tab-pane">
				<SettingSlider
					title="Field Camera"
					{...mapValue("fieldCamera")}
					marks={{ 0: "Auto", 1: "Manual" }}
				/>

				<SettingSlider
					title="Camera Up/Down"
					{...mapValue("cameraUpDown")}
					marks={{ 0: "Original", 1: "Reverse" }}
				/>

				<SettingSlider
					title="Camera Left/Right"
					{...mapValue("cameraLeftRight")}
					marks={{ 0: "Original", 1: "Reverse" }}
				/>

				<SettingSlider
					title="Summon Effects"
					{...mapValue("summonEffects")}
					marks={{ 0: "Auto", 1: "None" }}
				/>
			</div>
		</>
	);
};
