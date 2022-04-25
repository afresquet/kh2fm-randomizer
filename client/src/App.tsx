import { BackTop, Layout } from "antd";
import "antd/dist/antd.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Changelog } from "./components/Changelog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Seed } from "./components/Seed";
import { Support } from "./components/Support";

function App() {
	return (
		<>
			<Layout>
				<Header />

				<Layout.Content style={{ padding: 24 }}>
					<Routes>
						<Route path="seed">
							<Route index element={<Seed />} />

							<Route path=":seed" element={<Seed />} />
						</Route>

						<Route path="about" element={<About />} />

						<Route path="changelog" element={<Changelog />} />

						<Route path="support" element={<Support />} />

						<Route index element={<Navigate to="seed" />} />
					</Routes>
				</Layout.Content>

				<Footer />
			</Layout>

			<BackTop />
		</>
	);
}

export default App;
