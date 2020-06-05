import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Generate } from "./components/Generate";
import { Header } from "./components/Header";

function App() {
	return (
		<Layout>
			<Header />

			<Layout.Content>
				<Switch>
					<Route path="/seed/:seed?" component={Generate} exact />
					<Route path="/about" component={() => null} exact />
					<Route path="/changelogs" component={() => null} exact />
					<Redirect to="/seed" />
				</Switch>
			</Layout.Content>

			<Footer />
		</Layout>
	);
}

export default App;
