import React from 'react';
import "./index.css";

const Fade = ({visible, children}) => {
    let className = "fade";
    if(!visible){
        className += " out";
    }else{
        className += " in";
    }
    console.log("isopen in fade:", visible)
    return (
        <div className= "fade in">
            {children}
        </div>
    )
}

export default Fade
