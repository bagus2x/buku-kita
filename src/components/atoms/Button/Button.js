import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    
    const { variant, disabled, onClick, children, to, className, onMouseOver, style } = props;

    return ( 
        variant === 'link' ? <Link style={style} to={ to } className="btn btn-link">{ children }</Link>
                                        :
                            <button
                                className={`btn${ variant ? ' ' + variant: '' }${ className ? ' ' + className: '' }`}
                                onClick={ onClick }
                                disabled={ disabled }
                                onMouseOver={ onMouseOver }
                                style={ style }
                            >{ children }</button>
    )
}

export default Button;