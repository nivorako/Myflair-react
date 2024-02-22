import React from 'react';
import "./index.css";

const WhatsappClose = ({rotate, onClick}) => {
    console.log("rotate in whatsapp close :", rotate);
    const handleOnClick = () => {
        if(onClick){
            onClick();
        }
    }
    return (
        <div className='whatsappClose' onClick={handleOnClick}>
            <svg
                    aria-hidden="true"
                    role="presentation"
                    className={`whatsappClose-svg ${rotate ? 'rotate' : ''}`}
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg" 
                    onClick={handleOnClick}
                >
                    <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
            </svg>
        </div>
    )
}

export default WhatsappClose
