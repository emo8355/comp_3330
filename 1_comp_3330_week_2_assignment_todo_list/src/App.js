import React, { useState, useRef } from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
	//useState hook init
	const [todos, setTodos] = useState([
		{ id: 0, task: "Eat", isChecked: true },
		{ id: 1, task: "Sleep", isChecked: false },
		{ id: 2, task: "Repeat", isChecked: false },
	]);

	//useRef init
	const newTask = useRef();

	const addTodo = (e) => {
		const addedTask = newTask.current.value;
		if (addedTask.trim() !== "") {
			setTodos([
				...todos,
				{ id: todos.length, task: addedTask, isChecked: false },
			]);
		}
		newTask.current.value = null;
	};
	const editTodo = (e) => {};

	function deleteTodo(id) {
		const newTodo = [...todos].filter((todo) => todo.id !== id);
		setTodos(newTodo);
	}

	function isComplete(id) {
		let isComplete = todos.find((todo) => todo.id === id);
		isComplete.isChecked = !isComplete.isChecked;
		setTodos([...todos]);
	}

	console.log(todos);
	const remainTasks = todos.filter((todo) => !todo.isChecked).length;
	return (
		<div className="App">
			<h1>Todo List</h1>
			<h3>What needs to be done ? </h3>
			<div className="taskForm" autoComplete="off">
				<input placeholder="Enter your task" ref={newTask} type="text"></input>
				&nbsp;
				<button onClick={addTodo}>Add</button>
			</div>
			<br />
			<div className="listControl">
				<button>Show all tasks</button>
				&nbsp;
				<button>Show active tasks</button>
				&nbsp;
				<button>Show completed tasks</button>
			</div>
			<h2>{remainTasks} tasks remaining</h2>
			<ul>
				<Todos
					todolist={todos}
					deleteTodo={deleteTodo}
					isComplete={isComplete}
				/>
			</ul>
		</div>
	);
}

export default App;
