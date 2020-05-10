import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Generate } from "./components/Generate";
import { Header } from "./components/Header";
import { Seed } from "./components/Seed";

const useStyles = makeStyles(theme => ({
	content: {
		padding: theme.spacing(3),
		flex: "1 0 auto",
	},
}));

function App() {
	const classes = useStyles();

	return (
		<>
			<div className={classes.content}>
				<Header />

				<main>
					<Container>
						<Switch>
							<Route path="/" component={Generate} exact />
							<Route path="/seed/:seed" component={Seed} exact />
						</Switch>
					</Container>
				</main>
			</div>

			<Footer />
		</>
	);
}

export default App;
