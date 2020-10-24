import React from "react";

export default function NavBar(prop) {
	const navStyle = {
		width: "80%",
		margin: "auto",
	};

	return (
		<div style={navStyle}>
			<nav>
				{prop.links.map((link) => (
					<span key={link.name}>
						<a href={link.path}>{link.name}</a>
						&nbsp;&nbsp;| &nbsp;&nbsp;
					</span>
				))}
			</nav>
		</div>
	);
}
