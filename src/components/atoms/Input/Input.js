import React from 'react';
import './Input.css';

const Input = (props) => {
    
    const { variant, disabled, onClick, children, className, name, id, placeholder, type } = props;

    return (
        <input
            className={`inp${ variant ? ' ' + variant: '' }${ className ? ' ' + className : ''}`}
            onClick={ onClick }
            disabled={ disabled }
            name={ name }
            id={ id }
            placeholder={ placeholder }
            type={ type }
        >{ children }</input>
    )
}

export const Label = (props) => {

    const { children, id, title, className } = props;

    return (
        <div
            className={`input-wrapper${ className ? ' ' + className : ''}`}
        >
            <label htmlFor={id}>{ title }</label>
            { React.cloneElement(children, { name: id, id: id }) }
        </div>
    )
}

export default Input;