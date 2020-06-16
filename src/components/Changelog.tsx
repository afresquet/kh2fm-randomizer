import { Button, Card, Divider, Modal, Space, Switch } from "antd";
import React, { useCallback } from "react";
import { useToggle } from "../hooks/useToggle";

const versions: { version: string; changes: string[] }[] = [
	{
		version: "0.1.8",
		changes: [
			"Split Absent Silhouette and Data Organization XIII fights as options",
		],
	},
	{
		version: "0.1.7",
		changes: [
			"Fixed a bug where the shared link would not be properly encoded",
		],
	},
	{
		version: "0.1.6",
		changes: [
			"Beginner/Standard/Proud now start with 48 AP Boosts to match Critical's 50 starting AP (will change this in the future when it's figured out how to change the starting AP stat)",
		],
	},
	{
		version: "0.1.5",
		changes: [
			"Fixed bug where Final Form wouldn't have its rewards properly handled when either Form Abilities/Growth Abilities weren't set to \"Randomize\"",
			"Fixed shared link",
		],
	},
	{
		version: "0.1.4",
		changes: [
			"Made Offline Mode optional",
			"Persisting URL in browser history when sharing link or when downloading seed",
		],
	},
	{
		version: "0.1.3",
		changes: [
			"Fixed a bug that included rewards in locations that weren't supposed to contain those rewards",
		],
	},
	{
		version: "0.1.2",
		changes: [
			"Moved Betwixt and Between reward from The World That Never Was to Twilight Town",
		],
	},
	{
		version: "0.1.1",
		changes: [
			"Fixed Olympus Demyx's reward",
			"Fixed Goddess of Fate Cup having three rewards",
		],
	},
	{
		version: "0.1.0",
		changes: [
			"UI Redesign",
			"Option to replace locations with useless rewards",
			"Extra options (Terra, Sephiroth, Promise Charm, and others)",
			"Choose your language patch before downloading the seed.",
			"Search feature in Spoiler Logs (Ctrl+F)",
			"Better mobile experience (lanscape mode recommended when viewing the Spoiler Logs)",
			"Shorter URLs",
			"Website works while offline",
		],
	},
];

export const Changelog: React.FC = () => {
	const [modalVisible, toggleModalVisible] = useToggle(false);

	const onOfflineMode = useCallback(() => {
		if (localStorage.getItem("offlineMode")) {
			localStorage.removeItem("offlineMode");
		} else {
			localStorage.setItem("offlineMode", "true");
		}

		window.location.reload(true);
	}, []);

	return (
		<div style={{ margin: "0 auto", maxWidth: 1200 }}>
			{versions.map(({ version, changes }, index) => (
				<Card
					title={version}
					style={{ width: "100%", marginBottom: 24 }}
					key={version}
					extra={
						index === 0 ? (
							<Space>
								<div>Offline Mode</div>
								<Switch
									checked={!!localStorage.getItem("offlineMode")}
									onChange={onOfflineMode}
								/>

								<Divider type="vertical" />

								<Button onClick={toggleModalVisible} block>
									How to Update
								</Button>

								<Modal
									title="How to Update"
									visible={modalVisible}
									onCancel={toggleModalVisible}
									footer={[
										<Button onClick={toggleModalVisible} key="cancel">
											Cancel
										</Button>,
										<Button
											type="primary"
											onClick={() => {
												window.location.reload(true);
											}}
											key="submit"
										>
											Refresh without cache
										</Button>,
									]}
								>
									<p>
										If you are not using Offline Mode, refreshing the website
										should give you the latest version.
									</p>

									<p>
										If you are using Offline Mode, you'll have to refresh
										without cache. The button below attempts to do so but it
										doesn't always work, so you'll have to search how to refresh
										without cache on your browser.
									</p>

									<p>You can also turn off Offline Mode and turn it back on.</p>

									<p>
										Make sure you have an internet connection before updating.
									</p>
								</Modal>
							</Space>
						) : null
					}
				>
					<ul>
						{changes.map(change => (
							<li key={change}>{change}</li>
						))}
					</ul>
				</Card>
			))}
		</div>
	);
};
