import { Tabs } from "antd";
import React, { useContext } from "react";
import { SeedContext } from "../../context/seed";
import { ButtonDownload } from "./ButtonDownload";
import { ButtonShare } from "./ButtonShare";
import { ModalHelp } from "./ModalHelp";
import "./Seed.css";
import { SeedNameInput } from "./SeedNameInput";
import { TabPaneGameModeSettings } from "./TabPaneGameModeSettings";
import { TabPaneInclude } from "./TabPaneInclude";
import { TabPaneSettings } from "./TabPaneSettings";
import { TabPaneWorlds } from "./TabPaneWorlds";

export const Seed: React.FC = () => {
	const {
		seed: { seed },
	} = useContext(SeedContext);

	return (
		<div style={{ margin: "0 auto", maxWidth: 1200 }}>
			<SeedNameInput />

			<ButtonDownload />

			<Tabs
				defaultActiveKey="settings"
				style={{ padding: "0 16px 16px", backgroundColor: "white" }}
				tabBarExtraContent={[
					<ButtonShare key="share" />,
					<ModalHelp key="help" />,
				]}
			>
				<Tabs.TabPane tab="Settings" key="settings">
					<TabPaneSettings />
				</Tabs.TabPane>

				<Tabs.TabPane tab="Worlds" key="worlds">
					<TabPaneWorlds />
				</Tabs.TabPane>

				<Tabs.TabPane tab="Include" key="include">
					<TabPaneInclude />
				</Tabs.TabPane>

				<Tabs.TabPane tab="Game Mode Settings" key="gameModeSettings">
					<TabPaneGameModeSettings />
				</Tabs.TabPane>

				<Tabs.TabPane tab="Spoiler Logs" key="spoilerLogs" disabled={!seed}>
					spoiler logs
				</Tabs.TabPane>
			</Tabs>
		</div>
	);
};
