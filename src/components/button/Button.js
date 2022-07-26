//@flow
import * as React from 'react';
import './button.css';

/**
* This component is a button.
* It accepts a custom class name and can receive a click handle
* Can be used anywhere.
*/

const defaultProps = {
  title: 'Button',
  id: '',
  className: '',
  disabled: false,
  type: ''
};

function Button(props = defaultProps) {
  return (
    <button
      disabled={props.disabled ? "disabled" : ""}
      className={` ${props.className} ${props.disabled ? "disabled" : ""}`}
      id={props.id}
      onClick={!props.disabled ? props.onClick : undefined}
      type={props.type}
    >
      {props.title}
    </button>
  );
}

Button.defaultProps = defaultProps
export default Button;

