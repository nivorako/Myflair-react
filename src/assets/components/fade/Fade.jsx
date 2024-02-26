import React from 'react';
import "./index.css";

const Fade = ({visible, children}) => {
    let className = "fade";
    if(!visible){
        className += " out";
    }
    console.log("isopen in fade:", visible)
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Fade
