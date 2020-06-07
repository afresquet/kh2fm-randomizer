import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Seed } from "./components/Seed";
import { SeedContextProvider } from "./context/seed";

function App() {
	return (
		<Layout>
			<Header />

			<Layout.Content style={{ padding: 24 }}>
				<Switch>
					<SeedContextProvider>
						<Route path="/seed/:seed?" component={Seed} exact />
					</SeedContextProvider>
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
