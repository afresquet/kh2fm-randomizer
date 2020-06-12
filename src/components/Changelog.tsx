import { Button, Card, Modal } from "antd";
import React from "react";
import { useToggle } from "../hooks/useToggle";

const versions: { version: string; changes: string[] }[] = [
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

	return (
		<div style={{ margin: "0 auto", maxWidth: 1200 }}>
			{versions.map(({ version, changes }, index) => (
				<Card
					title={version}
					style={{ width: "100%", marginBottom: 24 }}
					key={version}
					extra={
						index === 0 ? (
							<>
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
											Refresh with clearing cache
										</Button>,
									]}
								>
									<p>
										Most of the times, refreshing the website should be enough
										to ensure you are on the latest version.
									</p>
									<p>
										However, this app gets cached for offline mode, so it could
										be reading from cache instead of downloading the latest
										version.
									</p>
									<p>
										To make sure you are updated, you can force reload with
										clearing cache by clicking on the button below. Make sure
										you have an internet connection before doing so.
									</p>
									<p>
										If it doesn't work, search for how to force reload with
										clearing cache on your browser.
									</p>
								</Modal>
							</>
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
