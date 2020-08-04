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

			<Typography.Title type="secondary" style={{ marginTop: 8 * 5 }}>
				Credits
			</Typography.Title>

			<Divider />

			<p>
				<b>Sonicshadowsilver2:</b> for creating the Garden of Assemblage mod,
				without it the randomizer wouldn't be nearly as cool, and for being
				super helpful with cheat codes.{" "}
				<Typography.Link
					href="https://twitter.com/Sonicshadowsil2"
					target="_blank"
				>
					Follow him on Twitter
				</Typography.Link>{" "}
				and{" "}
				<Typography.Link
					href="https://streamlabs.com/sonicshadowsilver2/tip"
					target="_blank"
				>
					donate to him
				</Typography.Link>
				.
			</p>

			<p>
				<b>Desa3579:</b> for encouraging me into making this randomizer, and
				also teaching me a lot about cheat codes.{" "}
				<Typography.Link href="https://twitter.com/desa3579" target="_blank">
					Follow him on Twitter
				</Typography.Link>{" "}
				and{" "}
				<Typography.Link
					href="https://streamlabs.com/desa3579/tip"
					target="_blank"
				>
					donate to him
				</Typography.Link>
				.
			</p>

			<p>
				<b>Xaddgx Absol Brasse:</b> for being incredibly knowledgeable and
				helpful with cheat codes.{" "}
				<Typography.Link href="https://twitter.com/xaddgx" target="_blank">
					Follow them on Twitter
				</Typography.Link>
				.
			</p>

			<p>
				<b>Bizkit047:</b> for creating his own randomizer a long time ago and
				getting my attention into it.{" "}
				<Typography.Link href="https://twitter.com/Bizkit047" target="_blank">
					Follow him on Twitter
				</Typography.Link>
				.
			</p>
		</div>
	);
};
