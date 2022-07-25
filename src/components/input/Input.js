import * as React from 'react';
import './input.css';

/**
* This component is an input field.
* It accepts a css class name, receives props and onChange Event.
* Can be used anywhere.
*/



const defaultProps = {
	className: '',
	Input: 'text'
};
function Input(props = defaultProps) {
	return (
		<input
			className={`${props.className} ${props.error ? "error-color" : ""
				}`}
			type={props.type}
			placeholder={props.placeholder}
			onChange={props.onChange}
			onBlur={props.onBlur}
			name={props.name}
			value={props.value}
			disabled={props.disabled}
		/>
	);


}

Input.defaultProps = defaultProps
export default Input;