import React from "react";

export default function NavBar() {
	const navStyle = {
		width: "80%",
		margin: "auto",
	};

	return (
		<div style={navStyle}>
			<nav>
				<a href="/"> Home</a> | <a href="/about"> About</a>
			</nav>
		</div>
	);
}
