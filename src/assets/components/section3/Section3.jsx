import React from 'react';
import "./index.css";

const Section3 = ({
    id, 
    title, 
    section3List,
}) => {
    return (
        <section className='section3' id={id}>
             <h2 className='section3-title'>
                {title}
            </h2>
            <div className='section3-cards'>
                {
                    section3List.map((card, index) => {
                        return(
                            <div
                                className='section3-card'
                                key={index}
                            >
                                <div className='section3-cardImg'>
                                    <img src={card.img} alt="toto" />
                                </div>
                                <div className='section3-cardDesc'>
                                    <div className='section3-cardTitle'>
                                        <h3>{card.title}</h3>
                                        <p>{card.price} &#8364; / jour</p>
                                    </div>
                                    <button className='section3-btn'>
                                        <p
                                            className='section3-BtnText'
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
        </section >
    )
}

export default Section3
