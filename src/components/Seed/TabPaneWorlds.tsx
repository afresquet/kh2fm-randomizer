import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { Worlds } from "../../settings/Worlds";
import { Marks, SettingSlider } from "./SettingSlider";

export const TabPaneWorlds: React.FC = () => {
	const { worlds } = useContext(SeedContext);

	const mapValue = useValueMapper<Worlds, SliderValue>(worlds);

	return (
		<div className="tab-pane">
			<SettingSlider
				title="Simulated Twilight Town"
				marks={Marks.randomizing}
				{...mapValue("simulatedTwilightTown")}
			/>

			<SettingSlider
				title="Twilight Town"
				marks={Marks.randomizing}
				{...mapValue("twilightTown")}
			/>

			<SettingSlider
				title="Hollow Bastion"
				marks={Marks.randomizing}
				{...mapValue("hollowBastion")}
			/>

			<SettingSlider
				title="Cavern of Remembrance"
				marks={Marks.randomizing}
				{...mapValue("cavernOfRemembrance")}
			/>

			<SettingSlider
				title="Beast's Castle"
				marks={Marks.randomizing}
				{...mapValue("beastsCastle")}
			/>

			<SettingSlider
				title="Olympus Colisseum"
				marks={Marks.randomizing}
				{...mapValue("olympus")}
			/>

			<SettingSlider
				title="Agrabah"
				marks={Marks.randomizing}
				{...mapValue("agrabah")}
			/>

			<SettingSlider
				title="Land of Dragons"
				marks={Marks.randomizing}
				{...mapValue("landOfDragons")}
			/>

			<SettingSlider
				title="100 Acre Wood"
				marks={Marks.randomizing}
				{...mapValue("pooh")}
			/>

			<SettingSlider
				title="Atlantica"
				marks={Marks.randomizing}
				{...mapValue("atlantica")}
			/>

			<SettingSlider
				title="Pride Lands"
				marks={Marks.randomizing}
				{...mapValue("prideLands")}
			/>

			<SettingSlider
				title="Disney Castle"
				marks={Marks.randomizing}
				{...mapValue("disneyCastle")}
			/>

			<SettingSlider
				title="Timeless River"
				marks={Marks.randomizing}
				{...mapValue("timelessRiver")}
			/>

			<SettingSlider
				title="Halloween Town"
				marks={Marks.randomizing}
				{...mapValue("halloweenTown")}
			/>

			<SettingSlider
				title="Port Royal"
				marks={Marks.randomizing}
				{...mapValue("portRoyal")}
			/>

			<SettingSlider
				title="Space Paranoids"
				marks={Marks.randomizing}
				{...mapValue("spaceParanoids")}
			/>

			<SettingSlider
				title="The World That Never Was"
				marks={Marks.randomizing}
				{...mapValue("twtnw")}
			/>
		</div>
	);
};
