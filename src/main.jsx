import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import SingleCountry from "./components/SingleCountry";

import "./sass/sass-main.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}></Route>
				<Route path="/:countriesID" element={<SingleCountry />}></Route>
				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>
		</HashRouter>
	</React.StrictMode>
);
