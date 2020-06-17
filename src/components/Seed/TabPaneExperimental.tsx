import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { Experimental } from "../../settings/Experimental";
import { SettingSlider } from "./SettingSlider";

export const TabPaneExperimental: React.FC = () => {
	const { experimental } = useContext(SeedContext);

	const mapValue = useValueMapper<Experimental, SliderValue>(experimental);

	return (
		<div className="tab-pane">
			<SettingSlider title="Bonus Modifiers" {...mapValue("bonusModifiers")} />
		</div>
	);
};
