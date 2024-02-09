import React from 'react';
import "./index.css";

const Banner = () => {
    
    return (
        <div className='banner'>
            <h1 className='banner-title'>La boutique MyFlair</h1>
            <img 
                src={"images/0H7A4932-scaled.webp"} 
                alt='logo flair'
                className='banner-img'
            />
            <div className='banner-overlay'></div>
        </div>
        // <div className='banner'>
        //     <div className='banner-curtain'></div>
        //     <img 
        //         src={"images/0H7A4932-scaled.webp"} 
        //         alt='logo flair' 
        //         className='banner-img'
        //     />
        // </div>
    ) 
}

export default Banner
