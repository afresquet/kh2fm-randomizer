import { Button, Popover } from "antd";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";

export const ButtonShare: React.FC = () => {
	const {
		seed: { seed },
	} = useContext(SeedContext);

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
