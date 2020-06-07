import { Layout, Typography } from "antd";
import React from "react";

export const Footer: React.FC = () => {
	return (
		<Layout.Footer style={{ textAlign: "center" }}>
			<div style={{ margin: "0 auto", maxWidth: 1200 }}>
				Kingdom Hearts 2 Final Mix Randomizer <sup>beta</sup> created by{" "}
				<Typography.Link href="https://github.com/afresquet" target="_blank">
					Alvaro
				</Typography.Link>{" "}
				(
				<Typography.Link href="http://twitter.valaxor.com" target="_blank">
					Valaxor
				</Typography.Link>
				)
			</div>
		</Layout.Footer>
	);
};

// <footer className={classes.footer}>
// 	<Container>
// 		<Typography className={classes.left}>
// 			<a
// 				href="https://github.com/afresquet/kh2fm-randomizer"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={classes.link}
// 			>
// 				GitHub
// 			</a>
// 			{" - "}
// 			<a
// 				href="http://twitter.valaxor.com"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={classes.link}
// 			>
// 				Twitter
// 			</a>
// 			{" - "}
// 			<a
// 				href="http://twitch.valaxor.com"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={classes.link}
// 			>
// 				Twitch
// 			</a>
// 			{" - "}
// 			<a
// 				href="http://donate.valaxor.com"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={classes.link}
// 			>
// 				Donate
// 			</a>
// 		</Typography>

// 		<Typography className={classes.right}>
// 			Special thanks to{" "}
// 			<a
// 				href="https://twitter.com/Sonicshadowsil2"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={classes.link}
// 			>
// 				Sonicshadowsilver2
// 			</a>
// 			{", "}
// 			<a
// 				href="https://twitter.com/desa3579"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={classes.link}
// 			>
// 				Desa3579
// 			</a>
// 			{" and "}
// 			<a
// 				href="https://twitter.com/Bizkit047"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className={classes.link}
// 			>
// 				Bizkit047
// 			</a>
// 		</Typography>
// 	</Container>
// </footer>
