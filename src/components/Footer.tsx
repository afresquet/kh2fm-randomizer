import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(() => ({
	footer: {
		flexShrink: 0,
	},
	link: {
		color: "black",
		textDecoration: "none",
	},
	left: {
		float: "left",
	},
	right: {
		float: "right",
	},
}));

export const Footer: React.FC = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container>
				<Typography className={classes.left}>
					<a
						href="https://github.com/afresquet/kh2fm-randomizer"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.link}
					>
						GitHub
					</a>
					{" - "}
					<a
						href="https://github.com/afresquet/kh2fm-randomizer"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.link}
					>
						Twitter
					</a>
					{" - "}
					<a
						href="https://github.com/afresquet/kh2fm-randomizer"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.link}
					>
						Twitch
					</a>
				</Typography>

				<Typography className={classes.right}>
					Special thanks to{" "}
					<a
						href="https://twitter.com/Sonicshadowsil2"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.link}
					>
						Sonicshadowsilver2
					</a>
					{", "}
					<a
						href="https://twitter.com/desa3579"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.link}
					>
						Desa3579
					</a>
					{" and "}
					<a
						href="https://twitter.com/Bizkit047"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.link}
					>
						Bizkit047
					</a>
				</Typography>
			</Container>
		</footer>
	);
};
