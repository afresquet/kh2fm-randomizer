import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { Experimental } from "../../settings/Experimental";
import { SettingSlider } from "./SettingSlider";

export const TabPaneExperimental: React.FC = () => {
	const { experimental } = useContext(SeedContext);

	const mapValue = useValueMapper<Experimental, SliderValue>(experimental);

	const settings: { title: string; key: keyof Experimental }[] = [];

	return settings.length > 0 ? (
		<div className="tab-pane">
			{settings.map(({ title, key }) => (
				<SettingSlider title={title} {...mapValue(key)} key={key} />
			))}
		</div>
	) : (
		<div>No experimental features currently available.</div>
	);
};
