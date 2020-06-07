import { Slider } from "antd";
import { SliderProps } from "antd/lib/slider";
import React from "react";

export const Marks = {
	onOff: { 0: "Off", 1: "On" },
	randomizing: { 0: "Vanilla", 1: "Replace", 2: "Randomize" },
};

export interface SettingSliderProps extends SliderProps {
	title: string;
}

export const SettingSlider: React.FC<SettingSliderProps> = ({
	title,
	marks = Marks.onOff,
	...props
}) => {
	const max = Object.values(marks).length - 1;

	return (
		<div>
			<div style={{ textAlign: "center" }}>{title}</div>

			<div style={{ padding: "0 32px" }}>
				<Slider max={max} marks={marks} tooltipVisible={false} {...props} />
			</div>
		</div>
	);
};
