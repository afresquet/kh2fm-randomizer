import { Divider, Typography } from "antd";
import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { Experimental } from "../../settings/Experimental";
import { SettingSlider, SettingSliderProps } from "./SettingSlider";

interface Setting extends SettingSliderProps {
	key: keyof Experimental;
}

export const experimentalSettings: Setting[] = [
	{
		key: "keybladeStats",
		title: "Randomize Keyblade Stats",
		marks: { 0: "Vanilla", 1: "Positive", 2: "Positive/Negative" },
		help:
			"Positive: Values from 0 to 10. Positive/Negative: Values from -10 to 10.",
	},
];

export const TabPaneExperimental: React.FC = () => {
	const { experimental } = useContext(SeedContext);

	const mapValue = useValueMapper<Experimental, SliderValue>(experimental);

	return (
		<div>
			<p>Thank you for testing the experimental features!</p>

			<p>
				Note that these features are still in development, they could be
				unstable and you may run into problems. They may also drastically change
				at any point.
			</p>

			<p>
				If you encounter bugs or problems please provide feedback about them,
				feel free to{" "}
				<Typography.Link href="https://twitter.valaxor.com" target="_blank">
					tweet at me
				</Typography.Link>{" "}
				or{" "}
				<Typography.Link href="https://discord.gg/352TyvK" target="_blank">
					join the Rando Discord server
				</Typography.Link>
				.
			</p>

			<Divider />

			<div className="tab-pane">
				{experimentalSettings.map(({ title, key, ...props }) => (
					<SettingSlider
						title={title}
						{...mapValue(key)}
						key={key}
						{...props}
					/>
				))}
			</div>
		</div>
	);
};
