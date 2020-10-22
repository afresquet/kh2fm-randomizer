import { Divider, Typography } from "antd";
import { SliderValue } from "antd/lib/slider";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { bosses } from "../../enemyLocations";
import { enemies } from "../../enemyLocations";
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
		key: "enemies",
		title: "Randomize Enemies (Forced Fights Only)"
	},
	{
		key: "superbossRetry",
		help:
			"After dying, hold L2+R2+Select while pressing on Continue to load back into the fight",
		title: "Retry on Superbosses",
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

				<Typography>Known issues with Boss Randomizer:</Typography>

				<ul>
					<li>Sometimes the seed can take 4-5 seconds to be made after hitting the download button. In this case it's likely a lot of the bosses won't be randomized, so it's suggested to make a new seed in this case</li>
					<li>Bosses wait a different amount of time before their first attack, so in some cases you will get attacked before gaining control</li>
					<li>When Scar hits non-lion Sora with his lunge attack it will temporarily put Sora in a tpose.</li>
					<li>The game will softlock if Mickey is summoned against Marluxia and the doom counter hits 0.</li>
				</ul>

				<Typography>Current boss fights in the pool:</Typography>

				<ul>
					{bosses.map(boss => (
						<li key={boss.description}>{boss.description}</li>
					))}
				</ul>
			</div>

			<Divider />

			<div>

				<Typography>Current forced fights in the pool:</Typography>

				<ul>
					{enemies.map(location => (
						<li key={location.description}>{location.description}</li>
					))}
				</ul>
			</div>

		</div>
	);
};
