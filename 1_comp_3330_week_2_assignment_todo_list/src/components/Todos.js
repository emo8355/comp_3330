import React from "react";

export default function Todos({ todolist, deleteTodo, isComplete }) {
	const handleDelete = (id) => {
		deleteTodo(id);
	};

	const handleComplete = (id) => {
		isComplete(id);
	};

	return todolist.map((todo) => {
		return (
			<li key={todo.id}>
				<input
					type="checkbox"
					checked={todo.isChecked}
					onChange={() => {
						handleComplete(todo.id);
					}}
				></input>
				<span>{todo.task}</span>1
				<div className="singleTaskControl">
					<button>Edit {todo.task}</button>&nbsp;
					<button
						onClick={() => {
							handleDelete(todo.id);
						}}
					>
						Delete {todo.task}
					</button>
				</div>
				<br />
			</li>
		);
	});
}
