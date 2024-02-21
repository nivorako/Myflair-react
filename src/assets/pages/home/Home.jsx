import React,{useState, useEffect} from "react";

import Banner from "../../components/banner/Banner";
import Section from "../../components/section/Section";
import Section2 from "../../components/section2/Section2";
import Section3 from "../../components/section3/Section3";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import WhatsappClose from "../../components/whatsappClose/WhatsappClose";
import "./index.css";
import WhatsappSvg from "../../components/whatsappSvg/WhatsappSvg";

const Home = () => {

    const sectionList = [
        {
            img:"images/2024-01-0H7A3960-300x200.webp",
            title:["Coiffure & Make up"]
        },{
            img:"images/2024-01-0H7A3960-300x200.webp",
            title:["Onglerie"]
        },{
            img:"images/2024-01-0H7A5060-768x512.webp",
            title:["Cabines"]
        },{
            img:"images/2024-01-0H7A3960-600x400.webp",
            title:["Salles de Formations"]
        }

    ]

    const businessList = [
        {
            img:"images/2024-01-0H7A3960-300x200.webp",
            btnText:["Coiffure & Make up"],
            title:"Titre business 1",
            price: "100"
        },{
            img:"images/2024-01-0H7A3960-300x200.webp",
            btnText:["Onglerie"],
            title:"Titre business 2",
            price: "1010"
        },{
            img:"images/2024-01-0H7A5060-768x512.webp",
            btnText:["Cabines"],
            title:"Titre business 3",
            price: "100"
        },
        {
            img:"images/2024-01-0H7A3960-300x200.webp",
            btnText:["Coiffure & Make up"],
            title:"Titre business 4",
            price: "100"
        },{
            img:"images/2024-01-0H7A3960-300x200.webp",
            btnText:["Onglerie"],
            title:"Titre business 5",
            price: "100"
        },{
            img:"images/2024-01-0H7A5060-768x512.webp",
            btnText:["Cabines"],
            title:"Titre business 6",
            price: "100"
        }
    ]

    const servicesList = [
        {
            img:"images/2024-01-0H7A3960-300x200.webp",
            title:"Location Sèche Cheveux",
            price: "10"
        },{
            img:"images/2024-01-0H7A3960-300x200.webp",
            title:"Location fer à lisser",
            price: "10"
        },{
            img:"images/2024-01-0H7A5060-768x512.webp",
            title:"Serviette jetable",
            price: "1"
        },
        {
            img:"images/2024-01-0H7A3960-300x200.webp",
            title:"Ajoutez votre titre ici",
            price: "100"
        },{
            img:"images/2024-01-0H7A3960-300x200.webp",
            title:"Ajoutez votre titre ici",
            price: "100"
        },{
            img:"images/2024-01-0H7A5060-768x512.webp",
            title:"Ajoutez votre titre ici",
            price: "100"
        }
    ]

    const [whatsappIsOpen, setWhatsappIsOpen] = useState(false);
    console.log("whatsappIsOpen :", whatsappIsOpen)
    const [iconClicked, setIconClicked] = useState(false);
    const whatsappOnClick = () => {
        setIconClicked(true)      
        setTimeout(() => {
            setWhatsappIsOpen(!whatsappIsOpen); 
        }, 200);
    };

    return (
            <main id="home" className="home">
                <Banner />
                <div className="home-content">
                    <Section
                        id="position"
                        title="Nos postes à louer"
                        sectionList={sectionList}
                    />
                    <Section2 
                        id="business"
                        title="Nos Business Booster"
                        section2List={businessList}
                    />
                    <Section3 
                        id="services"
                        title="Nos Services Supplémentaires"
                        section3List={servicesList}
                    />
                </div> 
                
                {
                    !whatsappIsOpen
                            ?
                    (
                        <div className="whatsapp" id="whatsapp" onClick={() => whatsappOnClick()}>
                            <div className="whatsapp-msg" id="whatsapp-msg">
                                <p > Besoins d'aides ? <span>Discutez avec nous</span></p>
                            </div>
                            <WhatsappIcon 
                                rotate={iconClicked ? '360deg' : '0deg'}
                            />
                        </div> 
                    )
                            :
                    (
                        <div className="whatsapp modal" id="whatsapp" onClick={() => whatsappOnClick()}>
                            <div className="whatsappModal">
                                <div className="whatsappConv">
                                    <div className="whatsappConv-icon">
                                        
                                        <WhatsappSvg />
                                    </div>
                                    <div className="whatsappConv-text">
                                        <p className="whatsappConv-text1">
                                            Commencer une conversation
                                        </p>
                                        <p className="whatsappConv-text2">
                                        Cliquez sur l'un des membres ci-dessous pour discuter sur <span>whatsapp</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="whatsappClientServ">
                                    whatsappClientServ
                                </div>                                                
                            </div>
                            <WhatsappClose />
                        </div>
                    )
                }
                    
            </main>
    );
};

export default Home;
 