import { Divider, Typography } from "antd";
import React from "react";

export const About: React.FC = () => {
	return (
		<div
			style={{
				margin: "0 auto",
				maxWidth: 1200,
				backgroundColor: "white",
				padding: 24,
			}}
		>
			<Typography.Title>About KH2FM Randomizer</Typography.Title>

			<Divider />

			<p>
				This randomizer takes the rewards from the game and places them randomly
				somewhere else. There is logic in place to prevent locking yourself out,
				so every seed is beatable.
			</p>

			<p>
				Curretly it supports the Garden of Assemblage mod by Sonicshadowsilver2,
				support for the base game will come in the future.
			</p>

			<p>
				In order to play you will need to download the latest version of the
				mod, and generate a seed. Both files are required inside PCSX2's cheat
				folder.
			</p>

			<p>
				<Typography.Link
					href="https://github.com/afresquet/kh2fm-randomizer"
					target="_blank"
				>
					GitHub repo
				</Typography.Link>{" "}
				of the project.
			</p>

			<Divider />

			<p>
				If you encounter any problems with the randomizer feel free to contact
				me through{" "}
				<Typography.Link href="http://twitter.valaxor.com" target="_blank">
					Twitter
				</Typography.Link>
				. I also ocasionally stream on{" "}
				<Typography.Link href="http://twitch.valaxor.com" target="_blank">
					Twitch
				</Typography.Link>{" "}
				so feel free to stop by anytime!
			</p>

			<p>
				This randomizer is 100% free to use, but if you wish to you can{" "}
				<Typography.Link href="http://donate.valaxor.com" target="_blank">
					donate to me via this link
				</Typography.Link>
				.
			</p>

			<Divider />

			<p>
				Join the{" "}
				<Typography.Link href="https://discord.gg/352TyvK" target="_blank">
					KH Rando Discord!
				</Typography.Link>
			</p>

			<Divider />

			<p>
				Special thanks to{" "}
				<Typography.Link
					href="https://twitter.com/Sonicshadowsil2"
					target="_blank"
				>
					Sonicshadowsilver2
				</Typography.Link>
				,{" "}
				<Typography.Link href="https://twitter.com/desa3579" target="_blank">
					Desa3579
				</Typography.Link>{" "}
				and{" "}
				<Typography.Link href="https://twitter.com/Bizkit047" target="_blank">
					Bizkit047
				</Typography.Link>{" "}
				for their work and help on HEX codes. This project wouldn't have been
				possible without it.
			</p>
		</div>
	);
};
