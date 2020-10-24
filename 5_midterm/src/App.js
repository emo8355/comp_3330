import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} />
				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default App;
