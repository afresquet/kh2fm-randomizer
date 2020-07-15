import { Layout, Menu } from "antd";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
	{
		url: "/seed",
		title: "KH2FM Randomizer",
		sup: "beta",
	},
	{
		url: "/about",
		title: "About",
	},
	{
		url: "/changelog",
		title: "Changelog",
	},
	{
		url: "/support",
		title: "Support the Project",
	},
];

export const Header: React.FC = () => {
	const { pathname } = useLocation();

	const selected = pathname.startsWith("/seed") ? "/seed" : pathname;

	return (
		<Layout.Header style={{ padding: 0 }}>
			<Menu
				mode="horizontal"
				theme="dark"
				selectedKeys={[selected]}
				style={{ margin: "0 auto", maxWidth: 1200 }}
			>
				{navItems.map(({ url, title, sup }) => (
					<Menu.Item key={url}>
						<NavLink to={url}>
							{title} {sup ? <sup>{sup}</sup> : null}
						</NavLink>
					</Menu.Item>
				))}
			</Menu>
		</Layout.Header>
	);
};
