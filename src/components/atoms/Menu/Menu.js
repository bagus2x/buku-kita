import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import './Menu.css';

export const Content = React.forwardRef( (props, ref) => {

    return (
        <div ref={ref} id={props.id} className={`content${props.className ? ' ' + props.className : ''}`}>
            { props.children }
        </div>
    )

});

function Menu (props) {

    const contentRef = useRef(null);
    const menuRef = useRef(null);

    const { children, className, id} = props;
    const [isOpen, setOpen] = useState(false);

    Menu['handleClickOutside_' + id] = () => setOpen(false);
    Menu._onSelect = () => setOpen(false);

    const handleClickItems = () => {
        if(contentRef.current) {
            [].slice.call(contentRef.current.children).forEach((e) => {
                e.addEventListener('click', () => {
                    setTimeout(() => {
                        setOpen(false)
                    }, 200);
                })
            })
        }
    }
    useEffect(() => {        
        menuRef.current.addEventListener('mouseover', handleClickItems)
        return () => {
            menuRef.current.removeEventListener('mouseover', handleClickItems)
        }
    }, [])

    return(
            <div ref={ menuRef } className={`menu${ className ? ' '+ className : ''}`}>
                { React.cloneElement(children[0], {onClick: () => setOpen(!isOpen)}) }
                { isOpen ? React.cloneElement(children[1], {ref: contentRef}) : null }
            </div>
    )
}

export function OnSelect (props) {

    const { el } = props;

    return React.cloneElement(el, {_onSelect: null})
}

Menu.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.any
}

const clickOutsideConfig = {
  handleClickOutside: ({ props }) => Menu['handleClickOutside_' + props.id],
};
 
 export default onClickOutside(Menu, clickOutsideConfig);