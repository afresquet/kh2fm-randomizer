import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
	link: {
		color: "black",
		textDecoration: "none",
	},
}));

export const Header: React.FC = () => {
	const classes = useStyles();

	return (
		<header>
			<Container>
				<Typography variant="h4" align="center">
					<Link to="/" className={classes.link}>
						KH2FM Randomizer
					</Link>

					<Typography variant="subtitle1">
						by{" "}
						<a
							href="https://github.com/afresquet"
							target="_blank"
							rel="noopener noreferrer"
							className={classes.link}
						>
							Alvaro
						</a>{" "}
						<a
							href="https://www.twitch.tv/valaxor_"
							target="_blank"
							rel="noopener noreferrer"
							className={classes.link}
						>
							(Valaxor)
						</a>
					</Typography>
				</Typography>
			</Container>
		</header>
	);
};
