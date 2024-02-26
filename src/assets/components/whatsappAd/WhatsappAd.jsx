import React from 'react';
import "./index.css";
import WhatsappIcon from '../whatsappIcon/WhatsappIcon';

const WhatsappAd = ({iconClicked, isOpen}) => {
  return (
    <div className="whatsappAd">
        <div className='whatsappAd-text fadeInTxt'>
            <p>Besoins d'aides ? <span>Discutez avec nous</span></p>
        </div>
        <div className='whatsappAd-icon'>
            <WhatsappIcon 
                rotate={iconClicked ? '360deg' : '0deg'}
            />
        </div>
    </div>
  )
}

export default WhatsappAd;
