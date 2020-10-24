import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import ThemeToggler from "./ThemeToggler";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [themeMode, setThemeMode] = useState(
		localStorage.getItem("theme") || "darkMode"
	);

	const costumTheme = theme[themeMode];

	const toggleTheme = () => {
		setThemeMode((prevState) => {
			if (prevState === "lightMode") {
				return "darkMode";
			} else {
				return "lightMode";
			}
		});
	};

	useEffect(() => {
		localStorage.setItem("theme", themeMode);
	}, [themeMode]);

	const value = { toggleTheme, themeMode };

	return (
		<AppContext.Provider value={value}>
			<ThemeProvider theme={costumTheme}>
				<ThemeToggler />
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</AppContext.Provider>
	);
};

export default AppProvider;
