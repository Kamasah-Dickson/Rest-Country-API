import React from "react";
import Header from "./Header";
import Main from "./Main-section";
export default function App() {
	const [theme, setTheme] = React.useState(true);
	return (
		<>
			<Header theme={theme} setTheme={setTheme} />
			<Main theme={theme} setTheme={setTheme} />
		</>
	);
}
