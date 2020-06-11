import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { Include } from "../../settings/Include";
import { Marks, SettingSlider } from "./SettingSlider";

export const TabPaneInclude: React.FC = () => {
	const { include } = useContext(SeedContext);

	const mapValue = useValueMapper<Include, SliderValue>(include);

	return (
		<div className="tab-pane">
			<SettingSlider
				title="Donald's Abilities"
				{...mapValue("donaldAbilities")}
			/>

			<SettingSlider
				title="Goofy's Abilities"
				{...mapValue("goofyAbilities")}
			/>

			<SettingSlider
				title="Data Organization XIII / Absent Silhouettes"
				marks={Marks.randomizing}
				{...mapValue("organizationXIII")}
			/>

			<SettingSlider
				title="Olympus Cups"
				marks={Marks.randomizing}
				{...mapValue("olympusCups")}
			/>

			<SettingSlider title="Hades Cup" {...mapValue("hadesCup")} />

			<SettingSlider title="Lingering Will (Terra)" {...mapValue("terra")} />

			<SettingSlider title="Sephiroth" {...mapValue("sephiroth")} />

			<SettingSlider title="Ultima Weapon" {...mapValue("ultimaWeapon")} />

			<SettingSlider title="Final Form" {...mapValue("finalForm")} />

			<SettingSlider
				title="Form Abilities"
				marks={Marks.randomizing}
				{...mapValue("formAbilities")}
			/>

			<SettingSlider
				title="Form Growth Abilities"
				marks={Marks.randomizing}
				{...mapValue("growthAbilities")}
			/>

			<SettingSlider
				title="Form MAX Growth Abilities"
				{...mapValue("maxGrowthAbilities")}
			/>

			<SettingSlider title="Synthesis Items" {...mapValue("synthItems")} />
		</div>
	);
};
