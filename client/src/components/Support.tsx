import { Divider, Typography } from "antd";

export const Support: React.FC = () => {
	return (
		<div
			style={{
				margin: "0 auto",
				maxWidth: 1200,
				backgroundColor: "#1f1f1f",
				padding: 24,
			}}
		>
			<Typography.Title>Support the Project</Typography.Title>
			<Divider />
			<p>
				This randomizer is 100% free to use and will <b>always</b> be.
			</p>

			<p>
				You are supporting it already by playing/streaming it and you can let
				others know about it. Thank you as well :)
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
				and{" "}
				<Typography.Link href="https://twitter.com/desa3579" target="_blank">
					Desa3579
				</Typography.Link>{" "}
				, they were huge help for the project and without them it wouldn't have
				been possible.
			</p>
		</div>
	);
};
