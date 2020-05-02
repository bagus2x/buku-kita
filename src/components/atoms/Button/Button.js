import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    
    const { variant, disabled, onClick, children } = props;

    return ( 
        variant === 'link' ? <Link className="btn-link">{ children }</Link>
                                        :
                            <button
                                className={`btn${ variant ? ' ' + variant: '' }`}
                                onClick={ onClick }
                                disabled={ disabled }
                            >{ children }</button>
    )
}

export default Button;