import { Select } from "antd";
import { SelectProps, SelectValue } from "antd/lib/select";

export interface SettingSelectProps extends SelectProps<SelectValue> {
	title: string;
	optionsMap: { [key: string]: string };
}

export const SettingSelect: React.FC<SettingSelectProps> = ({
	title,
	optionsMap,
	...props
}) => {
	return (
		<div>
			<div style={{ textAlign: "center", paddingBottom: 8 }}>{title}</div>

			<Select style={{ width: "100%" }} {...props}>
				{Object.entries(optionsMap).map(([label, value]) => (
					<Select.Option value={value} key={value}>
						{label}
					</Select.Option>
				))}
			</Select>
		</div>
	);
};
