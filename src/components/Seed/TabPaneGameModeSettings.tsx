import { Divider } from "antd";
import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { GoAModSettings } from "../../settings/GoAModSettings";
import { SettingSlider } from "./SettingSlider";

export const TabPaneGameModeSettings: React.FC = () => {
	const {
		gameMode: { goa },
	} = useContext(SeedContext);

	const mapValue = useValueMapper<GoAModSettings, SliderValue>(goa);

	return (
		<>
			<div className="tab-pane">
				<SettingSlider 
					title="Promise Charm" 
					help="The Promise Charm let's you skip TWTNW if you have all 3 proofs"
					{...mapValue("promiseCharm")} 
				/>

				<SettingSlider 
					title="Go Mode" 
					help="Notifies you when you can start the final fights"
					{...mapValue("goMode")} 
				/>
			</div>

			<Divider />

			<div className="tab-pane">
				<SettingSlider
					title="Shorter Day 5 (Simulated Twilight Town)"
					help="Let's you skip the 'Wonders missions' on Roxas' Day 5"
					{...mapValue("shorterDay5")}
				/>
			</div>
		</>
	);
};
