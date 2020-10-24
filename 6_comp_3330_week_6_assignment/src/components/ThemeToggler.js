import React, { useContext } from "react";
import { AppContext } from "./AppProvider";

const ThemeToggler = () => {
	const { toggleTheme, themeMode } = useContext(AppContext);
	const handleThemeChange = (e) => {
		toggleTheme();
	};
	return (
		<div className="theme">
			<button onClick={handleThemeChange}>Toggle Theme</button>
		</div>
	);
};

export default ThemeToggler;
