import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { Experimental } from "../../settings/Experimental";
import { SettingSlider, SettingSliderProps } from "./SettingSlider";

interface Setting extends SettingSliderProps {
	key: keyof Experimental;
}

export const TabPaneExperimental: React.FC = () => {
	const { experimental } = useContext(SeedContext);

	const mapValue = useValueMapper<Experimental, SliderValue>(experimental);

	const settings: Setting[] = [
		{
			title: "Keyblade Abilities",
			key: "keybladeAbilities",
			marks: { 0: "Vanilla", 1: "Own pool", 2: "Randomize" },
		},
	];

	return settings.length > 0 ? (
		<div className="tab-pane">
			{settings.map(({ title, key, ...props }) => (
				<SettingSlider title={title} {...mapValue(key)} key={key} {...props} />
			))}
		</div>
	) : (
		<div>No experimental features currently available.</div>
	);
};
