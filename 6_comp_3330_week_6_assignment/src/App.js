import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ApiConnect from "./components/ApiConnect";
import Error from "./components/Error";

const link = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/about",
		name: "About",
	},
	{
		path: "/Api",
		name: "Api",
	},
];

function App() {
	return (
		<div>
			<NavBar links={link} />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} />
				<Route path="/Api" component={ApiConnect} />
				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default App;
