import React from "react";

export default function RadioButton(prop) {
	return (
		<input
			type="radio"
			checked={prop.isChecked}
			value={prop.status.value}
			name={prop.status.name}
			onChange={prop.onChange}
		/>
	);
}
