import React, { useState, useRef } from "react";
import RadioButton from "./RadioButton";

export default function Todos({ todo, deleteTodo, isComplete, editTodo }) {
	const [isEditing, setEditing] = useState(false);

	const editTask = useRef();
	const handleDelete = (id) => {
		deleteTodo(id);
	};

	const handleStatus = (id, value) => {
		isComplete(id, value);
	};

	const handleEdit = (id) => {
		editTodo(id, editTask.current.value);
		setEditing(false);
	};

	const editMode = (
		<div id="editTemplate">
			<div>
				<label htmlFor={todo.id}></label>
				<input
					id={todo.id}
					className="newTaskInput"
					placeholder="Enter New Task"
					type="text"
					ref={editTask}
				/>
			</div>
			<div className="singleTaskControl">
				<button className="cancelBtn" onClick={() => setEditing(false)}>
					Cancel
				</button>
				<button className="saveBtn" onClick={() => handleEdit(todo.id)}>
					Save
				</button>
			</div>
		</div>
	);

	const statusOption = [
		{
			value: 0,
			name: "Not Started",
		},
		{ value: 1, name: "Started" },
		{ value: 2, name: "Complete" },
	];

	const radioGroup = statusOption.map((status, index) => (
		<span key={status.name}>
			<RadioButton
				status={status}
				isChecked={todo.status === status.value}
				onChange={() => {
					handleStatus(todo.id, status.value);
				}}
			/>
			{status.name}
			&nbsp;&nbsp;
		</span>
	));

	const viewMode = (
		<div id="viewTemplate">
			<div className="taskSection">
				<form>{radioGroup}</form>
				&nbsp;&nbsp;
			</div>
			<div className="singleTaskControl">
				<button className="ediBtn" onClick={() => setEditing(true)}>
					Edit {todo.task}
				</button>
				&nbsp;
				<button
					className="delBtn"
					onClick={() => {
						handleDelete(todo.id);
					}}
				>
					Delete {todo.task}
				</button>
			</div>
		</div>
	);

	return (
		<div key={todo.id} className="task">
			{isEditing ? editMode : viewMode}
			<br />
		</div>
	);
}
