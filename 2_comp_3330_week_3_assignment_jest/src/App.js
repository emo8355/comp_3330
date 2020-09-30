import React, { useState, useRef } from "react";
import "./App.css";
import Todos from "./components/Todos";
import FilterButton from "./components/FilterButton";

function App() {
	//useState hook init
	const [todos, setTodos] = useState([
		{ id: 0, task: "Eat", isChecked: true },
		{ id: 1, task: "Sleep", isChecked: false },
		{ id: 2, task: "Repeat", isChecked: false },
	]);
	const [filter, setFilter] = useState("All");
	const [newName, setNewName] = useState("");

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

	function deleteTodo(id) {
		const newTodo = [...todos].filter((todo) => todo.id !== id);
		setTodos(newTodo);
	}

	function isComplete(id) {
		let isComplete = todos.find((todo) => todo.id === id);
		isComplete.isChecked = !isComplete.isChecked;
		setTodos([...todos]);
	}

	const editTodo = (id, newTask) => {
		const editedTask = [...todos].find((todo) => todo.id === id);
		editedTask.task = newTask;
		setNewName(editedTask);
	};

	const filterTask = {
		All: () => true,
		Active: (task) => !task.isChecked,
		Completed: (task) => task.isChecked,
	};

	const taskStatus = Object.keys(filterTask);
	const filterList = taskStatus.map((name) => (
		<FilterButton
			key={name}
			name={name}
			isPressed={name === filter}
			setFilter={setFilter}
		/>
	));

	const taskList = todos
		.filter((task) => filterTask[filter](task))
		.map((todo) => (
			<Todos
				key={todo.id}
				todo={todo}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
				isComplete={isComplete}
			/>
		));

	const remainTasks = todos.filter((todo) => !todo.isChecked).length;
	return (
		<div className="App">
			<br />
			<h2>What needs to be done ? </h2>
			<div className="taskForm" autoComplete="off">
				<input placeholder="Enter your task" ref={newTask} type="text"></input>
				&nbsp;
				<button type="button" id="addTodoBtn" onClick={addTodo}>
					Add
				</button>
			</div>
			<br />
			<div className="listControl">{filterList}</div>
			<div className="tasksBdy">
				<h1>{remainTasks} Tasks Remaining</h1>
				{taskList}
			</div>
		</div>
	);
}

export default App;
