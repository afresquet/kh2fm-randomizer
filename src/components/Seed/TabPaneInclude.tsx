import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { RandomizingAction } from "../../settings/enums";
import { Include } from "../../settings/Include";
import { Marks, SettingSlider } from "./SettingSlider";

export const TabPaneInclude: React.FC = () => {
	const {
		include: [include, setInclude],
		worlds: [worlds],
	} = useContext(SeedContext);

	const mapValue = useValueMapper<Include, SliderValue>([include, setInclude]);

	return (
		<div className="tab-pane">
			<SettingSlider
				title="Keyblade Abilities"
				help="Support means the green abilities, action means the blue abilities."
				{...mapValue("keybladeAbilities")}
				marks={{ 0: "Vanilla", 1: "Support", 2: "Action/Support" }}
			/>

			<SettingSlider
				title="Donald's Abilities"
				{...mapValue("donaldAbilities")}
			/>

			<SettingSlider
				title="Goofy's Abilities"
				{...mapValue("goofyAbilities")}
			/>

			<SettingSlider
				title="Absent Silhouettes"
				marks={Marks.randomizing}
				{...mapValue("absentSilhouettes")}
			/>

			<SettingSlider
				title="Data Organization XIII"
				marks={Marks.randomizing}
				{...mapValue("dataOrganizationXIII")}
			/>

			<SettingSlider
				title="Olympus Cups"
				marks={Marks.randomizing}
				{...mapValue("olympusCups")}
			/>

			<SettingSlider
				title="Hades Cup"
				{...mapValue("hadesCup")}
				disabled={include.olympusCups !== RandomizingAction.RANDOMIZE}
			/>

			<SettingSlider
				title="Lingering Will (Terra)"
				{...mapValue("terra")}
				disabled={worlds.disneyCastle !== RandomizingAction.RANDOMIZE}
			/>

			<SettingSlider
				title="Sephiroth"
				{...mapValue("sephiroth")}
				disabled={worlds.hollowBastion !== RandomizingAction.RANDOMIZE}
			/>

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

			<SettingSlider title="Synthesis Rewards" {...mapValue("synthItems")} />
		</div>
	);
};
