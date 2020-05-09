import React, { useRef } from 'react';
import './Input.css';

const Input = (props) => {
    
    const { variant, className } = props;
    const inputRef = useRef(null);

    return React.createElement('input', {...props, 
        className: `inp${ variant ? ' ' + variant: '' }${ className ? ' ' + className : ''}`,
        ref: inputRef
    })
}

export const Alert = (props) =>  <span className="alert form">{ props.text }</span>;

export const Label = (props) => {

    const { children, id, title, className } = props;

    return (
        <div
            className={`input-wrapper${ className ? ' ' + className : ''}`}
        >
            <label htmlFor={id}>{ title }</label>
            { Array.isArray(children) ? (
                <>
                    { React.cloneElement(children[0], { name: id, id: id }) }
                    { children[1].props.error ? children[1] : '' }
                </>
            ) : React.cloneElement(children, { name: id, id: id }) }
        </div>
    )
}
export default Input;