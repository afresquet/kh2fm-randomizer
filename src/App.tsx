import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Generate } from "./components/Generate";

function App() {
	return (
		<Container>
			<Typography>KH2FM Randomizer</Typography>
			<Typography>by Valaxor</Typography>

			<Switch>
				<Route path="/" component={Generate} exact />
			</Switch>
		</Container>
	);
}

export default App;
