import React from "react";

export default function RandomUser(prop) {
	const user = { ...prop.info };
	console.log(user);
	return (
		<div
			style={{
				textAlign: "center",
				width: "60%",
				margin: "0 auto",
				marginTop: "100px",
			}}
		>
			<img src={user.picture.large} />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					textAlign: "left",
					width: "80%",
				}}
			>
				<span>
					Name: {user.name.first} {user.name.last}
				</span>
				<span>Gender: {user.gender}</span>
				<span>Email: {user.email}</span>
			</div>
		</div>
	);
}
