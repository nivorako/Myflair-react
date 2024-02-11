import React from 'react';
import "./index.css";

const Section2 = ({
        id, 
        title, 
        section2List, 
    }) => {
    return (
        <section 
            className="section2"
            id={id}
        >
            <h2 className='section2-title'>
                {title}
            </h2>
            <div className='section2-cards'>
                {
                    section2List.map((card, index) => {
                        return(
                            <div
                                className='section2-card'
                                key={index}
                            >
                                <div className='section2-cardImg'>
                                    <img src={card.img} alt="toto" />
                                </div>
                                <div className='section2-cardDesc'>
                                    <div className='section2-cardTitle'>
                                        <h3>{card.title}</h3>
                                        <p>{card.price} &#8364;</p>
                                    </div>
                                    <button className='section2-btn'>
                                        <p
                                            className='section2-BtnText'
                                        >
                                            Ajoutez au panier
                                        </p>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Section2
