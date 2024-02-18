import React from 'react';
import "./index.css";
import WhatsappIcon from '../whatsappIcon/WhatsappIcon';

const Whatsapp = () => {
    return (
        <div className="whatsapp">
            <div className="whatsapp-msg">
                <p > Besoins d'aides ? <span>Discutez avec nous</span></p>
            </div>
            <WhatsappIcon />
        </div>
    )
}

export default Whatsapp
