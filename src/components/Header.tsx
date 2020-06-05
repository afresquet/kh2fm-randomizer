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
		url: "/changelogs",
		title: "Changelogs",
	},
];

export const Header: React.FC = () => {
	const { pathname } = useLocation();

	const selected = pathname.startsWith("/seed") ? "/seed" : pathname;

	return (
		<Layout.Header>
			<Menu mode="horizontal" theme="dark" selectedKeys={[selected]}>
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
