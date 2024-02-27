import React, {useEffect} from 'react';
import "./index.css";
import WhatsappClose from '../whatsappClose/WhatsappClose';
import WhatsappSvg from '../whatsappSvg/WhatsappSvg';

const WhatsappModal = ({iconClicked, visible, showService}) => {
    
    return (
        <div className='whatsapp-modal'>
            
                <div className={`whatsapp-modal-modal ${visible ? "fadeOutService" : "fadeInService"}`}>
                    <div className='whatsapp-modalConv'>
                        <div className='whatsapp-modalConv-icon'>
                            <WhatsappSvg />
                        </div>
                        <div className='whatsapp-modalConv-text'>
                            <p>Commencer une conversation</p>
                            <span>Cliquez sur l'un des membres ci-dessous pour discuter sur<span className='bold'>Whatsapp</span></span>
                        </div>
                    </div>
                    <div className='whatsapp-modalService'>
                        <div className='whatsapp-modalService-note'>
                            <p>
                                L'équipe répond généralement en quelques minutes.
                            </p>
                        </div>
                        <div 
                            className='whatsapp-modalService-service fadeInModalService' 
                            id="whatsapp-modalService"
                        >
                            <div className='whatsapp-modalService-bigIcon'>
                                <img src="images/wa.svg" alt="" className='wa-img' />
                                
                            </div>
                            <div className='whatsapp-modalService-text'>
                                <p>
                                    Service Client my flair
                                </p>
                            </div>
                            <div className='whatsapp-modalService-littleIcon'>
                                <img src="images/wa.svg" alt="" className='wa-img'/>
                            </div>
                        </div>
                        <div className='svg'>
                           ouups
                        </div>
                    </div>
                </div>
           
            <div className='whatsapp-modal-icon'>
                <WhatsappClose
                    rotate={iconClicked ? true : false}  
                />
            </div>
        </div>
    )
}

export default WhatsappModal
