import { Card } from "antd";
import React from "react";

const versions: { version: string; changes: string[] }[] = [
	{
		version: "0.1.0",
		changes: [
			"UI Redesign",
			"Option to replace locations with useless rewards",
			"Extra options (Terra, Sephiroth, Promise Charm, etc)",
			"Choose your language patch before downloading the seed.",
			"Search feature in Spoiler Logs (Ctrl+F)",
			"Better mobile experience (lanscape mode recommended when viewing the Spoiler Logs)",
		],
	},
];

export const Changelog: React.FC = () => {
	return (
		<div style={{ margin: "0 auto", maxWidth: 1200 }}>
			{versions.map(({ version, changes }) => (
				<Card
					title={version}
					style={{ width: "100%", marginBottom: 24 }}
					key={version}
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
