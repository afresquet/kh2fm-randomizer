import { Button, Checkbox, Input, message, Popover, Space } from "antd";
import copy from "copy-to-clipboard";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SeedContext } from "../../context/seed";
import { useSeedURL } from "../../hooks/useSeedURL";

export const ButtonShare: React.FC = () => {
	const { seed } = useContext(SeedContext);
	const navigate = useNavigate();

	const [visible, setVisible] = useState(false);

	const [includeSettings, setIncludeSettings] = useState(true);

	const { url, urlWithSettings: urlWithParams } = useSeedURL();

	const link = `https://randomizer.valaxor.com/#${
		includeSettings ? urlWithParams : url
	}`;

	const onClick = useCallback(() => {
		setVisible(false);

		copy(link);

		message.success("Link copied to the clipboard!");

		navigate(urlWithParams);
	}, [link, urlWithParams, navigate]);

	const button = (
		<Popover
			placement="bottomRight"
			title="Share seed"
			visible={visible}
			onVisibleChange={setVisible}
			content={
				<Space style={{ width: 300 }} direction="vertical">
					<Checkbox
						checked={includeSettings}
						onChange={event => {
							setIncludeSettings(event.target.checked);
						}}
					>
						Include settings
					</Checkbox>

					<Input
						value={link}
						readOnly={true}
						suffix={
							<Button type="link" style={{ marginRight: -7 }} onClick={onClick}>
								COPY
							</Button>
						}
					/>
				</Space>
			}
			trigger="click"
		>
			<Button style={{ marginLeft: 8, marginRight: -8 }}>Share</Button>
		</Popover>
	);

	return seed ? button : null;
};
