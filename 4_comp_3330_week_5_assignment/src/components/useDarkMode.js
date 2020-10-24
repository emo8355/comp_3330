import { useEffect, useState } from "react";
export const useDarkMode = () => {
	const [theme, setTheme] = useState("dark");

	const setMode = (mode) => {
		localStorage.setItem("theme", mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === "light" ? setMode("dark") : setMode("light");
	};

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		localTheme && setTheme(localTheme);
	}, []);
	return [theme, themeToggler];
};
