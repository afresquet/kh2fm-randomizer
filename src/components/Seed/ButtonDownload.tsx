import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { GoAModModalDownload } from "../GoAMod/GoAModModalDownload";

interface Props {
	seed: string;
}

export const ButtonDownload: React.FC<Props> = ({ seed }) => {
	return (
		<div style={{ display: "flex", margin: "8px 0" }}>
			<GoAModModalDownload />

			<Dropdown
				overlay={
					<Menu onClick={console.log}>
						<Menu.Item disabled>Choose a language patch</Menu.Item>
						<Menu.Item key="F266B00B.pnach">
							Xeeynamo's Rev 5/Japanese (F266B00B.pnach)
						</Menu.Item>
						<Menu.Item key="B7398B17.pnach">
							Sora6645's Rev 6 (B7398B17.pnach)
						</Menu.Item>
						<Menu.Item key="FAF99301.pnach">
							CrazyCatz's/Sora6645's Rev Final (FAF99301.pnach)
						</Menu.Item>
					</Menu>
				}
				disabled={!seed}
			>
				<Button type="primary" style={{ marginLeft: 4 }} block>
					Download Seed
				</Button>
			</Dropdown>
		</div>
	);
};
