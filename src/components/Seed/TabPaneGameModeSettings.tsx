import React from "react";
import { SettingSlider } from "./SettingSlider";

interface Props {}

export const TabPaneGameModeSettings: React.FC<Props> = () => {
	return (
		<div className="tab-pane">
			<SettingSlider title="Promise Charm" />
		</div>
	);
};
