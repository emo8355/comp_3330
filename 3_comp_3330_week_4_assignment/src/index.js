import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const taskArray = [
	{ id: 0, task: "Eat", isChecked: true },
	{ id: 1, task: "Sleep", isChecked: false },
	{ id: 2, task: "Repeat", isChecked: false },
];

ReactDOM.render(
	<React.StrictMode>
		<App tasks={taskArray} />
	</React.StrictMode>,
	document.getElementById("root")
);
