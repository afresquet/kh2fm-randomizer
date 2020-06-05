import { Layout, Menu } from "antd";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
	{
		url: "/seed",
		title: "KH2FM Randomizer",
	},
	{
		url: "/about",
		title: "About",
	},
	{
		url: "/changelogs",
		title: "Changelogs",
	},
];

export const Header: React.FC = () => {
	const { pathname } = useLocation();

	return (
		<Layout.Header>
			<Menu mode="horizontal" theme="dark" selectedKeys={[pathname]}>
				{navItems.map(({ url, title }) => (
					<Menu.Item key={url}>
						<NavLink to={url}>{title}</NavLink>
					</Menu.Item>
				))}
			</Menu>
		</Layout.Header>
	);
};
