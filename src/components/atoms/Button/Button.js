import React from 'react';
import './Button.css';

const Button = (props) => {
    
    const { variant, disabled, onClick, children } = props;

    return (
        <button
            className={`btn${ variant ? ' ' + variant: '' }`}
            onClick={ onClick }
            disabled={ disabled }
        >{ children }</button>
    )
}

export default Button;