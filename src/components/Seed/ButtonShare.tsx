import { Button, Checkbox, Input, message, Popover, Space } from "antd";
import copy from "copy-to-clipboard";
import _ from "lodash";
import React, { useContext, useMemo, useState } from "react";
import { SeedContext } from "../../context/seed";
import { useConfigDiff } from "../../hooks/useConfigDiff";

export const ButtonShare: React.FC = () => {
	const {
		seed,
		seedName: { name },
	} = useContext(SeedContext);

	const [includeSettings, setIncludeSettings] = useState(true);

	const diff = useConfigDiff();

	const params = useMemo(
		() =>
			Object.entries(diff).reduce((result, [key, values]) => {
				if (_.isEmpty(values)) return result;

				const delimiter = result === "" ? "?" : "&";

				const string = encodeURI(JSON.stringify(values));

				return `${result}${delimiter}${key}=${string}`;
			}, ""),
		[diff]
	);

	const url = `https://afresquet.github.io/kh2fm-randomizer/#/seed/${encodeURI(
		name
	)}${includeSettings ? params : ""}`;

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
						value={url}
						suffix={
							<Button
								type="link"
								style={{ marginRight: -7 }}
								onClick={() => {
									copy(url);

									message.success("Link copied to the clipboard!");
								}}
							>
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
