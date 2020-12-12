import { Layout, Typography } from "antd";
import React from "react";

export const Footer: React.FC = () => {
	return (
		<Layout.Footer style={{ textAlign: "center" }}>
			<div style={{ margin: "0 auto", maxWidth: 1200 }}>
				Kingdom Hearts 2 Final Mix Randomizer <sup>beta</sup> created by{" "}
				<Typography.Link href="https://github.com/afresquet" target="_blank">
					Alvaro
				</Typography.Link>{" "}
				(
				<Typography.Link href="http://twitter.valaxor.com" target="_blank">
					Valaxor
				</Typography.Link>
				)
			</div>
		</Layout.Footer>
	);
};
