import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import SingleCountry from "./components/SingleCountry";
import Header from "./components/Header";

import "./sass/sass-main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}></Route>
				<Route path="/:countriesID" element={<SingleCountry />}></Route>
				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
