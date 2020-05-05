import React from 'react';
import './Input.css';

const Input = (props) => {
    
    const { variant, children, className } = props;

    return React.createElement('input', {...props, 
        className: `inp${ variant ? ' ' + variant: '' }${ className ? ' ' + className : ''}`
    }, children)
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