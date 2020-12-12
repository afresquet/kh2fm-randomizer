import { Divider, Typography } from "antd";
import React from "react";

const supporters = [
	{ name: "James Faherty", amount: "50.00" },
	{ name: "ShibuyaGato", amount: "40.00" },
	{ name: "Smithsville", amount: "30.33" },
	{ name: "Nja09", amount: "25.00" },
	{ name: "Cole T.", amount: "25.00" },
	{ name: "Rory McGuinness", amount: "25.00" },
	{ name: "KZ", amount: "25.00" },
	{ name: "Luis Flores", amount: "20.00" },
	{ name: "Dylan Shwan", amount: "20.00" },
	{ name: "Sam Stevens", amount: "20.00" },
	{ name: "ViolinGamer", amount: "20.00" },
	{ name: "Ashley-Rahne MacGabhann", amount: "20.00" },
	{ name: "Jake Lorimer", amount: "20.00" },
	{ name: "DJPRS", amount: "20.00" },
	{ name: "Star", amount: "15.00" },
	{ name: "Joseph Radoff", amount: "10.16" },
	{ name: "Heufneutje", amount: "10.00" },
	{ name: "DutchPotato", amount: "10.00" },
	{ name: "Brandon Martinez", amount: "5.00" },
];

export const Support: React.FC = () => {
	return (
		<div
			style={{
				margin: "0 auto",
				maxWidth: 1200,
				backgroundColor: "white",
				padding: 24,
			}}
		>
			<Typography.Title>Support the Project</Typography.Title>
			<Divider />
			<p>
				This randomizer is 100% free to use and will <b>always</b> be.
			</p>
			<p>
				If you would like to financially support my work, you can disable
				adblockers on this website or{" "}
				<Typography.Link href="http://donate.valaxor.com" target="_blank">
					donate to me
				</Typography.Link>
				. Thank you very much :)
			</p>
			<p>
				You can still support the project without spending any money. You are
				supporting it already by playing/streaming it and you can let others
				know about it. Thank you as well :)
			</p>
			<p>
				You can also follow me on{" "}
				<Typography.Link href="http://twitter.valaxor.com" target="_blank">
					Twitter
				</Typography.Link>{" "}
				and on{" "}
				<Typography.Link href="http://twitch.valaxor.com" target="_blank">
					Twitch
				</Typography.Link>
				.
			</p>
			<p>
				Please also consider supporting{" "}
				<Typography.Link
					href="https://twitter.com/Sonicshadowsil2"
					target="_blank"
				>
					Sonicshadowsilver2
				</Typography.Link>{" "}
				(
				<Typography.Link
					href="https://streamlabs.com/sonicshadowsilver2/tip"
					target="_blank"
				>
					donation link
				</Typography.Link>
				) and{" "}
				<Typography.Link href="https://twitter.com/desa3579" target="_blank">
					Desa3579
				</Typography.Link>{" "}
				(
				<Typography.Link
					href="https://streamlabs.com/desa3579/tip"
					target="_blank"
				>
					donation link
				</Typography.Link>
				) , they were huge help for the project and without them it wouldn't
				have been possible.
			</p>

			<p>
				Thank you to all the Patreons that supported while the Patreon was
				active!
			</p>
			<ul>
				{supporters.map(({ name, amount }) => (
					<li>
						{name}: €{amount}
					</li>
				))}
			</ul>
		</div>
	);
};
