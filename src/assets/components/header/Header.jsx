import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
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
                            width="100"
                            height="266"
                            src="./images/2023-12-cropped-1.png"
                            className="elementor-animation-float attachment-full size-full wp-image-33"
                            alt=""
                            srcSet="./images/2023-12-cropped-1.png 500w, ./images/2023-12-cropped-1-300x160.png 300w"
                            sizes="(max-width: 500px) 100vw, 500px"
                        />
                    </a>
                </div>                   
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                        className="elementor-element elementor-element-9a5956b elementor-widget__width-initial elementor-nav-menu--stretch elementor-widget-tablet__width-initial elementor-nav-menu__align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
                       
                    >
                        <div className="elementor-widget-container">
                            {/* <link
                                rel="stylesheet"
                                href="./css/pro-elements-assets-css-widget-nav-menu.min.css"
                            /> */}
                            <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-background e--animation-fade">
                                <ul
                                    id="menu-1-9a5956b"
                                    className="elementor-nav-menu"
                                >
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-1217">
                                        <a
                                            href="https://www.myflair.fr/#espace"
                                            className="elementor-item elementor-item-anchor menu-link"
                                        >
                                            Location
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-403">
                                        <a
                                            href="https://www.myflair.fr/formation/"
                                            className="elementor-item menu-link"
                                        >
                                            Formation
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-404">
                                        <a
                                            href="https://www.myflair.fr/gestion-planning/"
                                            className="elementor-item menu-link"
                                        >
                                            Gestion Planning
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1008">
                                        <a
                                            href="https://www.myflair.fr/business-booster/"
                                            className="elementor-item menu-link"
                                        >
                                            Business booster
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div
                                className="elementor-menu-toggle"
                                role="button"
                                tabIndex="0"
                                aria-label="Menu Toggle"
                                aria-expanded="false"
                            >
                                <svg
                                    aria-hidden="true"
                                    role="presentation"
                                    className="elementor-menu-toggle__icon--open elementor-animation-grow e-font-icon-svg e-eicon-menu-bar"
                                    viewBox="0 0 1000 1000"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    role="presentation"
                                    className="elementor-menu-toggle__icon--close elementor-animation-grow e-font-icon-svg e-eicon-close"
                                    viewBox="0 0 1000 1000"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
                                </svg>
                                <span className="elementor-screen-only">
                                    Menu
                                </span>
                            </div>
                            <nav
                                className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                                aria-hidden="true"
                            >
                                <ul
                                    id="menu-2-9a5956b"
                                    className="elementor-nav-menu"
                                >
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-1217">
                                        <a
                                            href="https://www.myflair.fr/#espace"
                                            className="elementor-item elementor-item-anchor menu-link"
                                            tabIndex="-1"
                                        >
                                            Location
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-403">
                                        <a
                                            href="https://www.myflair.fr/formation/"
                                            className="elementor-item menu-link"
                                            tabIndex="-1"
                                        >
                                            Formation
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-404">
                                        <a
                                            href="https://www.myflair.fr/gestion-planning/"
                                            className="elementor-item menu-link"
                                            tabIndex="-1"
                                        >
                                            Gestion Planning
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1008">
                                        <a
                                            href="https://www.myflair.fr/business-booster/"
                                            className="elementor-item menu-link"
                                            tabIndex="-1"
                                        >
                                            Business booster
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-a9d2ab5 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget elementor-widget-button"
                        data-id="a9d2ab5"
                        data-element_type="widget"
                        data-widget_type="button.default"
                    >
                        <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                                <a
                                    className="elementor-button elementor-button-link elementor-size-sm"
                                    href="#"
                                >
                                    <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-icon elementor-align-icon-left">
                                            <svg
                                                aria-hidden="true"
                                                className="e-font-icon-svg e-fas-user-lock"
                                                viewBox="0 0 640 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path>
                                            </svg>
                                        </span>
                                        <span className="elementor-button-text">
                                            Connexion / Inscription
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>               
            </section>
        </header>
    );
};

export default Header;