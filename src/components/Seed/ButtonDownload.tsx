import { Button, Dropdown, Menu } from "antd";
import { MenuProps } from "antd/lib/menu";
import downloadjs from "downloadjs";
import React, { useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { SeedContext } from "../../context/seed";
import { firebase } from "../../firebase";
import { createPnach } from "../../helpers/createPnach";
import { useSeedURL } from "../../seed/useSeedURL";
import { GoAModModalDownload } from "../GoAMod/GoAModModalDownload";

export const ButtonDownload: React.FC = () => {
	const {
		seed,
		loading,
		error,
		seedName: { name },
		configuration,
	} = useContext(SeedContext);
	const { push } = useHistory();

	const { urlWithSettings: urlWithParams } = useSeedURL();

	const download = useCallback<NonNullable<MenuProps["onClick"]>>(
		async event => {
			const pnach = createPnach(seed!, configuration);

			downloadjs(pnach, event.key as string, "application/octet-stream");

			firebase.analytics().logEvent("seed_downloaded", {
				seed: configuration.name,
			});

			push(urlWithParams);
		},
		[seed, configuration, push, urlWithParams]
	);

	return (
		<div style={{ display: "flex", margin: "8px 0" }}>
			<GoAModModalDownload />

			<Dropdown
				overlay={
					<Menu onClick={download}>
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
					{!seed && !loading && !error && !name && "Give the Seed a name"}
					{!seed && loading && !error && name && "Generating Seed..."}
					{seed && !loading && !error && name && "Download Seed"}
					{!seed && !loading && error && name && "An error occurred!"}
				</Button>
			</Dropdown>
		</div>
	);
};
