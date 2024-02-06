import React, {useState} from "react";
import { useMediaQuery } from 'usehooks-ts';
import MenuIcon from "../menuIcon/MenuIcon";
import IconClose from "../iconClose/IconClose";
import "./index.css";
import Drawer from "../drawer/Drawer";

/**
 * 
 * @returns {JSX.Element} - display Myflair landing page
 */

const Header = () => {

    const isTablette = useMediaQuery("(max-width:1024px)");
    const isMobile = useMediaQuery("(max-width:768px)");
    const navItems = ["location", "formation", "gestion planning", "business booster"];
    const [isDrawer, toggleDrawer] = useState(false);
    console.log("isDrawer :", isDrawer)
    const drawerOnClick = () => {
        const drawer = document.getElementById("drawer")
        toggleDrawer(!isDrawer)
            if(!isDrawer){
                drawer.style.height = `${drawer.scrollHeight}px`
            }else{
                drawer.style.height="0"
            }
    }

    return (
        <header
            className="header"
        >
            <section
                className="header-section"
            >                                       
                <div className="header-logo">
                    <a href="https://www.myflair.fr" rel="noopener noreferrer">
                        <img
                           
                            src="./images/2023-12-cropped-1.png"
                            className="logo-img"
                            alt=""
                            srcSet="./images/2023-12-cropped-1.png 500w, ./images/2023-12-cropped-1-300x160.png 300w"
                            sizes="(max-width: 500px) 100vw, 500px"
                        />
                    </a>
                </div>                                         
               
                {   // si tablette ou mobile :
                    isTablette ? (
                        isMobile ? (
                            // si mobile : menuIcon entouré de menuIconContainer
                            <div 
                                className="header-menuIcon"
                                role="button"
                                tabIndex="0"
                                aria-label="Menu Toggle"
                                aria-expanded="false"
                                onClick={drawerOnClick}
                            >
                                <div className="menuIconContainer">
                                    {
                                        !isDrawer ? <MenuIcon /> : <IconClose />
                                    }
                                    
                                </div>
                            </div>
                        ) : (
                            // si tablette : menuIcon
                            <div 
                                className="header-menuIcon"
                                role="button"
                                tabIndex="0"
                                aria-label="Menu Toggle"
                                aria-expanded="false"
                                onClick={drawerOnClick}
                            >
                                {
                                    !isDrawer ? <MenuIcon /> : <IconClose />
                                }
                            </div>
                        )
                        
                       
                    ) : (
                        // sinon : header-nav
                        <ul
                            className="header-nav"
                        >
                                {
                                    navItems.map((item, index) => {
                                        return(
                                            <li 
                                                key={index}
                                                className="header-navItem"
                                                aria-label={`Navigate to ${item}`}
                                                role="button"
                                                tabIndex={`${index}`}
                                            >
                                                <a
                                                    href="https://www.myflair.fr/#espace"
                                                    className="header-navLink"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                        </ul>
                    )
                } 
                
                {   // header connect
                    isMobile ? null : (
                        <div
                            className="header-connect"
                        >                                                        
                                <a className="connect-link">                                   
                                    <svg
                                        aria-hidden="true"
                                        className="connect-svg"
                                        viewBox="0 0 640 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"
                                            fill="white"
                                        >    
                                        </path>
                                    </svg>
                                    
                                    <span className="connect-btn">
                                        <p>Connexion / <br/>Inscription</p>
                                        
                                    </span>
                                </a>                                                          
                        </div>  
                    )
                }
            
            </section>
            <Drawer 
                navItems={navItems}
            />
        </header>
    );
};

export default Header;
