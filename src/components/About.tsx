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
				Currently it supports the{" "}
				<Typography.Link
					href="https://docs.google.com/document/d/1GYjEnrM_TIk7qyO75clPLYD-_nP5wTR7K6SE-Wn-QCg/edit"
					target="_blank"
				>
					Garden of Assemblage mod
				</Typography.Link>{" "}
				by Sonicshadowsilver2, support for the base game will come in the
				future.
			</p>

			<p>
				In order to play you will need to download the latest version of the
				mod, and generate a seed. Both files are required inside PCSX2's cheat
				folder.
			</p>

			<Divider />

			<p>
				This project is open source, here's the{" "}
				<Typography.Link
					href="https://github.com/afresquet/kh2fm-randomizer"
					target="_blank"
				>
					GitHub repo
				</Typography.Link>{" "}
				of the project. Contributions are welcome!
			</p>

			<Divider />

			<p>
				<Typography.Link href="https://discord.gg/GcJR7Fv" target="_blank">
					Join the KH Rando Discord!
				</Typography.Link>{" "}
				It's a great place if you wanna hang out with other players, and ask for
				help!
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
