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
				<SettingSlider title="Promise Charm" {...mapValue("promiseCharm")} />

				<SettingSlider
					title="Go Mode"
					{...mapValue("goMode")}
					disabled={
						configuration.settings.criticalMode === Toggle.OFF &&
						configuration.settings.leveling === Leveling.LEVEL_ONE
					}
				>
					<p style={{ textAlign: "center" }}>You start with Gold Crown</p>
				</SettingSlider>
			</div>

			<Divider />

			<div className="tab-pane">
				<SettingSlider
					title="Shorter Day 5 (Simulated Twilight Town)"
					{...mapValue("shorterDay5")}
				/>
			</div>
		</>
	);
};
