import { Button, Popover } from "antd";
import React from "react";

interface Props {
	seed: string;
}

export const ButtonShare: React.FC<Props> = ({ seed }) => {
	const button = (
		<Popover
			placement="bottomRight"
			title="Share seed"
			content={`https://afresquet.github.io/kh2fm-randomizer/#/seed/${seed}`}
			trigger="click"
		>
			<Button style={{ marginLeft: 16, marginRight: -8 }}>Share</Button>
		</Popover>
	);

	return seed ? button : null;
};
