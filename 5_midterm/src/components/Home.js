import React, { useState, useRef, useEffect } from "react";
import Todos from "./Todos";
import FilterButton from "./FilterButton";
import ThemeToggler from "./ThemeToggler";

const filterTask = {
	All: () => true,
	NotStarted: (task) => task.status == 0,
	Started: (task) => task.status == 1,
	Completed: (task) => task.status == 2,
};

const taskStatus = Object.keys(filterTask);

const taskArray = [
	{ id: 0, task: "Eat", status: 0 },
	{ id: 1, task: "Sleep", status: 1 },
	{ id: 2, task: "Repeat", status: 2 },
];

function Home() {
	//useState hook init
	const [todos, setTodos] = useState(taskArray);
	const [filter, setFilter] = useState("All");
	const [newName, setNewName] = useState("");

	//useRef init
	const newTask = useRef();

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
	const filterList = taskStatus.map((name) => (
		<FilterButton
			key={name}
			name={name}
			isPressed={name === filter}
			setFilter={setFilter}
		/>
	));

	function addTodo(e) {
		const addedTask = newTask.current.value;
		if (addedTask.trim() !== "") {
			setTodos([
				...todos,
				{ id: todos.length, task: addedTask, isChecked: false },
			]);
		}
		newTask.current.value = null;
	}

	function deleteTodo(id) {
		const newTodo = [...todos].filter((todo) => todo.id !== id);
		setTodos(newTodo);
	}

	function isComplete(id, value) {
		let isComplete = todos.find((todo) => todo.id === id);
		isComplete.status = value;
		console.log(isComplete);
		setTodos([...todos]);
	}

	function editTodo(id, newTask) {
		const editedTask = [...todos].find((todo) => todo.id === id);
		editedTask.task = newTask;
		setNewName(editedTask);
	}

	function clearAll() {
		localStorage.clear();
		setTodos([]);
	}

	useEffect(() => {
		const data = localStorage.getItem("allTask");
		if (data) {
			setTodos([...JSON.parse(data)]);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("allTask", JSON.stringify([...todos]));
	});

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
				<br />
				<button type="button" id="deleteAll" onClick={clearAll}>
					Clear
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

export default Home;
