import { Button, Checkbox, Input, message, Popover, Space } from "antd";
import copy from "copy-to-clipboard";
import React, { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SeedContext } from "../../context/seed";
import { useSeedURL } from "../../seed/useSeedURL";

export const ButtonShare: React.FC = () => {
	const { seed } = useContext(SeedContext);
	const { push } = useHistory();

	const [includeSettings, setIncludeSettings] = useState(true);

	const { url, urlWithSettings: urlWithParams } = useSeedURL();

	const link = `https://afresquet.github.io/kh2fm-randomizer/#/seed/${
		includeSettings ? urlWithParams : url
	}`;

	const onClick = useCallback(() => {
		copy(link);

		message.success("Link copied to the clipboard!");

		push(urlWithParams);
	}, [link, urlWithParams, push]);

	const button = (
		<Popover
			placement="bottomRight"
			title="Share seed"
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
			<Button style={{ marginLeft: 16, marginRight: -8 }}>Share</Button>
		</Popover>
	);

	return seed ? button : null;
};
