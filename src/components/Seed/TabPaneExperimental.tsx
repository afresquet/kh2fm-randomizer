import { Divider, Typography } from "antd";
import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { bosses } from "../../enemyLocations";
import { useValueMapper } from "../../hooks/useValueMapper";
import { Experimental } from "../../settings/Experimental";
import { SettingSlider, SettingSliderProps } from "./SettingSlider";

interface Setting extends SettingSliderProps {
	key: keyof Experimental;
}

export const experimentalSettings: Setting[] = [
	{
		key: "bosses",
		title: "Randomize Bosses",
	},
	{
		key: "superbossRetry",
		help:
			"After dying, hold L2+R2+Select while pressing on Continue to load back into the fight",
		title: "Retry on Superbosses",
	},
	{
		key: "advancedLogic",
		help:
			"Less restricted item placement logic (should always be possible to get all items)",
		title: "Advanced Seed Generation Logic",
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
				<Typography.Link href="https://discord.gg/GcJR7Fv" target="_blank">
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

			<Divider />

			<div>
				<Typography>Current boss fights in the pool:</Typography>

				<ul>
					{bosses.map(boss => (
						<li key={boss.description}>{boss.description}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
