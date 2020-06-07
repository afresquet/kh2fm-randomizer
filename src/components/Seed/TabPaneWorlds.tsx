import React from "react";
import { Marks, SettingSlider } from "./SettingSlider";

interface Props {}

export const TabPaneWorlds: React.FC<Props> = () => {
	return (
		<div className="tab-pane">
			<SettingSlider
				title="Simulated Twilight Town"
				marks={Marks.randomizing}
			/>

			<SettingSlider title="Twilight Town" marks={Marks.randomizing} />

			<SettingSlider title="Hollow Bastion" marks={Marks.randomizing} />

			<SettingSlider title="Cavern of Remembrance" marks={Marks.randomizing} />

			<SettingSlider title="Beast's Castle" marks={Marks.randomizing} />

			<SettingSlider title="Olympus Colisseum" marks={Marks.randomizing} />

			<SettingSlider title="Agrabah" marks={Marks.randomizing} />

			<SettingSlider title="Land of Dragons" marks={Marks.randomizing} />

			<SettingSlider title="100 Acre Wood" marks={Marks.randomizing} />

			<SettingSlider title="Atlantica" marks={Marks.randomizing} />

			<SettingSlider title="Pride Lands" marks={Marks.randomizing} />

			<SettingSlider title="Disney Castle" marks={Marks.randomizing} />

			<SettingSlider title="Timeless River" marks={Marks.randomizing} />

			<SettingSlider title="Halloween Town" marks={Marks.randomizing} />

			<SettingSlider title="Port Royal" marks={Marks.randomizing} />

			<SettingSlider title="Space Paranoids" marks={Marks.randomizing} />

			<SettingSlider
				title="The World That Never Was"
				marks={Marks.randomizing}
			/>
		</div>
	);
};
