import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdate = React.createContext();

export function useTheme() {
	return useContext(ThemeContext);
}
export function updateTheme() {
	return useContext(ThemeUpdate);
}

export function ThemeProvider({ children }) {
	const [darkTheme, setDarkTheme] = useState(true);

	function toggleTheme() {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	}

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdate.Provider value={toggleTheme}>
				{children}
			</ThemeUpdate.Provider>
		</ThemeContext.Provider>
	);
}
