import { Divider, Typography } from "antd";
import { Experimental } from "kh2fm-randomizer";
import { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { useValueMapper } from "../../hooks/useValueMapper";
import { SettingSlider, SettingSliderProps } from "./SettingSlider";

interface Setting extends SettingSliderProps {
	key: keyof Experimental;
}

export const experimentalSettings: Setting[] = [];

export const TabPaneExperimental: React.FC = () => {
	const { experimental } = useContext(SeedContext);

	const mapValue = useValueMapper<Experimental, number>(experimental);

	return (
		<div>
			<p>Thank you for testing the experimental features!</p>

			<p>
				Note that these features are still in development, they could be
				unstable and you may run into problems. They may also drastically change
				at any point.
			</p>

			<p>
				If you encounter bugs or problems please{" "}
				<Typography.Link
					href="https://discord.com/invite/KH2FMRando"
					target="_blank"
				>
					join the Rando Discord server
				</Typography.Link>{" "}
				and provide your feedback.
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
