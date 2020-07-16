import { QuestionCircleOutlined } from "@ant-design/icons";
import { Slider, Tooltip } from "antd";
import { SliderProps } from "antd/lib/slider";
import React from "react";

export const Marks = {
	onOff: { 0: "Off", 1: "On" },
	randomizing: { 0: "Vanilla", 1: "Replace", 2: "Randomize" },
};

export interface SettingSliderProps extends SliderProps {
	title: string;
	help?: string;
}

export const SettingSlider: React.FC<SettingSliderProps> = ({
	children,
	title,
	help,
	marks = Marks.onOff,
	...props
}) => {
	const max = Object.values(marks).length - 1;

	return (
		<div>
			<div style={{ textAlign: "center" }}>
				{help ? (
					<Tooltip title={help}>
						<span>
							{title}
							<QuestionCircleOutlined style={{ padding: "0 4px" }} />
						</span>
					</Tooltip>
				) : (
					title
				)}
			</div>

			<div style={{ padding: "0 32px" }}>
				<Slider max={max} marks={marks} tooltipVisible={false} {...props} />
			</div>

			{children}
		</div>
	);
};
