import React, { useState, useRef } from "react";

export default function Todos({ todo, deleteTodo, isComplete, editTodo }) {
	const [isEditing, setEditing] = useState(false);

	const editTask = useRef();
	const handleDelete = (id) => {
		deleteTodo(id);
	};

	const handleComplete = (id) => {
		isComplete(id);
	};

	const handleEdit = (id) => {
		editTodo(id, editTask.current.value);
		setEditing(false);
	};

	const editMode = (
		<div>
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
				<button className="cancel_btn" onClick={() => setEditing(false)}>
					Cancel
				</button>
				<button className="save_btn" onClick={() => handleEdit(todo.id)}>
					Save
				</button>
			</div>
		</div>
	);

	const viewMode = (
		<div>
			<div className="taskSection">
				<input
					type="checkbox"
					checked={todo.isChecked}
					onChange={() => {
						handleComplete(todo.id);
					}}
				></input>
				&nbsp;&nbsp;
				<span className="inputBox">{todo.task}</span>
			</div>
			<div className="singleTaskControl">
				<button className="edi_btn" onClick={() => setEditing(true)}>
					Edit {todo.task}
				</button>
				&nbsp;
				<button
					className="del_btn"
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
