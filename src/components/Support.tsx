import { Divider, Typography } from "antd";
import React from "react";

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
				If you would like to financially support my work, you can{" "}
				<Typography.Link href="http://donate.valaxor.com" target="_blank">
					donate to me
				</Typography.Link>{" "}
				or{" "}
				<Typography.Link href="https://www.patreon.com/valaxor" target="_blank">
					become a Patreon
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
		</div>
	);
};
