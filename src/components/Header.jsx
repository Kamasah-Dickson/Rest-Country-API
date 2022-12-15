import React from "react";
import light from "../assets/dark_mode_FILL1_wght400_GRAD0_opsz48.svg";
import dark from "../assets/light_mode_FILL1_wght400_GRAD0_opsz48.svg";
export default function Header({ setTheme, theme }) {
	const body = document.body;
	theme
		? body.classList.add("light-mode")
		: body.classList.remove("light-mode");
	return (
		<>
			<header aria-label="header">
				<div className={theme ? "container light-mode" : "container"}>
					<h1>Where in the world?</h1>
					<div
						className="theme-toggle"
						aria-label={theme ? "Light Mode" : "Dark Mode"}
						tabIndex="0"
						onClick={() => setTheme((prev) => !prev)}
					>
						<img
							aria-label={theme ? "toggle lightMode" : "toggle darkMode"}
							src={theme ? dark : light}
							alt="theme"
						/>
						<span>{theme ? "Light Mode" : "Dark Mode"}</span>
					</div>
				</div>
			</header>
		</>
	);
}
