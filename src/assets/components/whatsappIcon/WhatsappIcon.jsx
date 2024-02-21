import React from 'react';
import "./index.css";

const WhatsappIcon = ({rotate}) => {

    return (
        <div className="whatsapp-icon" >
            <img src="images/whatsapp.png" alt="logo whatsapp" style={{ transform: `rotate(${rotate})` }} />
        </div>
    )
}

export default WhatsappIcon
