import React from "react";
import RandomUser from "./RandomUser";

const List = (props) => {
	const { repos } = props;
	if (!repos || repos.length === 0) return <p>No users, sorry</p>;
	const user = { ...props.repos };
	return (
		<div>
			<RandomUser info={user} />
		</div>
	);
};
export default List;
