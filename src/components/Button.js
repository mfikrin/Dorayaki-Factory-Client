import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export const Button = ( {
    className,
    children,
    type,
    onClick,
    linkto,
    customstyle,
    style
}) =>{

    if (customstyle === "flip"){
        style = " flip"
    }else{
        style = ""
    }
        

    return (
        <Link to={linkto} className={className}>
            <button className={"global__btn" + style} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
};


