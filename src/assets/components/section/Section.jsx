import React from 'react';
import "./index.css";

const Section = ({id, title, sectionList}) => {

   
    return (
        <section className='section' id={id}>
            <h2 className='section-title'>
                {title}
            </h2>
            <div className="section-cards">
                {
                    sectionList.map((card, index) => {
                        return(
                            <div 
                                className='section-card'
                                key={index}
                            >
                                <div className='section-cardImg'>
                                    <img src={card.img} alt="toto" />
                                </div>
                                <button className='section-btn'>
                                    <p
                                        className='section-BtnText'
                                    >
                                        {card.title}
                                    </p>
                                </button>
                                
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Section
