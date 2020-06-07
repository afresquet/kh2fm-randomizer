import React from "react";
import { Marks, SettingSlider } from "./SettingSlider";

interface Props {}

export const TabPaneInclude: React.FC<Props> = () => {
	return (
		<div className="tab-pane">
			<SettingSlider title="Level Up Abilities" marks={Marks.randomizing} />

			<SettingSlider title="Donald's Abilities" />

			<SettingSlider title="Goofy's Abilities" />

			<SettingSlider
				title="Data Organization XIII / Absent Silhouettes"
				marks={Marks.randomizing}
			/>

			<SettingSlider title="Olympus Cups" marks={Marks.randomizing} />

			<SettingSlider title="Ultima Weapon" />

			<SettingSlider title="Final Form" />

			<SettingSlider title="Form Abilities" marks={Marks.randomizing} />

			<SettingSlider title="Form Growth Abilities" marks={Marks.randomizing} />

			<SettingSlider title="Form MAX Growth Abilities" />

			<SettingSlider title="Synthesis Items" />
		</div>
	);
};
