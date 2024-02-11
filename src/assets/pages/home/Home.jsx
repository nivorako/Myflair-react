import React from "react";

import Banner from "../../components/banner/Banner";
import Section from "../../components/section/Section";
import Section2 from "../../components/section2/Section2";

import "./index.css";
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
            price: "100"
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

    return (
        <>
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
                </div>
            </main>
            {/* #content  */}
            <div
                data-elementor-type="footer"
                data-elementor-id="165"
                className="elementor elementor-165 elementor-location-footer"
                data-elementor-post-type="elementor_library"
            >
                {/* <div
                    className="elementor-element elementor-element-92387c6 e-flex e-con-boxed e-con e-parent"
                    data-id="92387c6"
                    data-element_type="container"
                    data-settings='{"background_background":"classNameic","content_width":"boxed"}'
                    data-core-v316-plus="true"
                >
                    <div className="e-con-inner">
                        <div
                            className="elementor-element elementor-element-e9e6006 e-flex e-con-boxed e-con e-child"
                            data-id="e9e6006"
                            data-element_type="container"
                            data-settings='{"content_width":"boxed"}'
                        >
                            <div className="e-con-inner">
                                <div
                                    className="elementor-element elementor-element-e1b665b elementor-widget elementor-widget-heading"
                                    data-id="e1b665b"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                >
                                    <div className="elementor-widget-container">
                                        <h2 className="elementor-heading-title elementor-size-default">
                                            SUIVEZ-NOUS SUR LES RÉSEAUX
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-2530174 e-flex e-con-boxed e-con e-child"
                            data-id="2530174"
                            data-element_type="container"
                            data-settings='{"content_width":"boxed"}'
                        >
                            <div className="e-con-inner">
                                <div
                                    className="elementor-element elementor-element-4e636b5 elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="4e636b5"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                            <a
                                                className="elementor-icon"
                                                href="#"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fab-facebook"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-614fce1 elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="614fce1"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                            <a
                                                className="elementor-icon"
                                                href="https://www.instagram.com/flair.beautyboss/"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fab-instagram"
                                                    viewBox="0 0 448 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-1363fa7 elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="1363fa7"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                            <a
                                                className="elementor-icon"
                                                href="https://www.tiktok.com/@flair.beautyboss"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fab-tiktok"
                                                    viewBox="0 0 448 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-205fe2a elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="205fe2a"
                                    data-element_type="widget"
                                    data-widget_type="icon.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                            <a
                                                className="elementor-icon"
                                                href=""
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fab-linkedin"
                                                    viewBox="0 0 448 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-7b9a7bd e-flex e-con-boxed e-con e-parent"
                    data-id="7b9a7bd"
                    data-element_type="container"
                    data-settings='{"background_background":"classNameic","content_width":"boxed"}'
                    data-core-v316-plus="true"
                >
                    <div className="e-con-inner">
                        <div
                            className="elementor-element elementor-element-7379a8b e-con-full e-flex e-con e-child"
                            data-id="7379a8b"
                            data-element_type="container"
                            data-settings='{"content_width":"full"}'
                        >
                            <div
                                className="elementor-element elementor-element-ad48eb6 elementor-widget elementor-widget-image"
                                data-id="ad48eb6"
                                data-element_type="widget"
                                data-widget_type="image.default"
                            >
                                <div className="elementor-widget-container">
                                    <a href="https://www.myflair.fr">
                                        <img
                                            loading="lazy"
                                            width="500"
                                            height="269"
                                            src="./images/2023-12-2-e1704961153382.png"
                                            className="attachment-full size-full wp-image-9"
                                            alt=""
                                            srcSet="./images/2023-12-2-e1704961153382.png 500w, ./images/2023-12-2-e1704961153382-300x161.png 300w"
                                            sizes="(max-width: 500px) 100vw, 500px"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-f9bdc20 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="f9bdc20"
                                data-element_type="widget"
                                data-widget_type="divider.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                        <span className="elementor-divider-separator"></span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-85f340c elementor-tablet-align-center elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="85f340c"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <link
                                        rel="stylesheet"
                                        href="./css/elementor-assets-css-widget-icon-list.min.css"
                                    />
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/qui-sommes-nous">
                                                <span className="elementor-icon-list-text">
                                                    Qui sommes-nous ?{" "}
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/contact">
                                                <span className="elementor-icon-list-text">
                                                    Contact
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/blog/">
                                                <span className="elementor-icon-list-text">
                                                    Blog
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-27a4fce e-con-full e-flex e-con e-child"
                            data-id="27a4fce"
                            data-element_type="container"
                            data-settings='{"content_width":"full"}'
                        >
                            <div
                                className="elementor-element elementor-element-7966421 elementor-widget elementor-widget-heading"
                                data-id="7966421"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        LOUER UN POSTE
                                    </h2>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-a7d84c9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="a7d84c9"
                                data-element_type="widget"
                                data-widget_type="divider.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                        <span className="elementor-divider-separator"></span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-bba9b53 elementor-tablet-align-center elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="bba9b53"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/poste-coiffure-make-up/">
                                                <span className="elementor-icon-list-text">
                                                    Coiffure & make up
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/poste-cabine/">
                                                <span className="elementor-icon-list-text">
                                                    Cabine
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/poste-onglerie/">
                                                <span className="elementor-icon-list-text">
                                                    Onglerie
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/formation/">
                                                <span className="elementor-icon-list-text">
                                                    Salle de formation
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-d3a7ef6 e-con-full e-flex e-con e-child"
                            data-id="d3a7ef6"
                            data-element_type="container"
                            data-settings='{"content_width":"full"}'
                        >
                            <div
                                className="elementor-element elementor-element-74e5da8 elementor-widget elementor-widget-heading"
                                data-id="74e5da8"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        BUSINESS BOOSTER
                                    </h2>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-51ed3be elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="51ed3be"
                                data-element_type="widget"
                                data-widget_type="divider.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                        <span className="elementor-divider-separator"></span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-8e1d235 elementor-tablet-align-center elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="8e1d235"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="#">
                                                <span className="elementor-icon-list-text">
                                                    Coaching Business
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="#">
                                                <span className="elementor-icon-list-text">
                                                    Coaching Canva
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="#">
                                                <span className="elementor-icon-list-text">
                                                    Création flyer
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="#">
                                                <span className="elementor-icon-list-text">
                                                    Création plaquette tarifaire
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="#">
                                                <span className="elementor-icon-list-text">
                                                    Creation template{" "}
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-f3a8c80 e-con-full e-flex e-con e-child"
                            data-id="f3a8c80"
                            data-element_type="container"
                            data-settings='{"content_width":"full"}'
                        >
                            <div
                                className="elementor-element elementor-element-4b04e19 elementor-widget elementor-widget-heading"
                                data-id="4b04e19"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        INFOS
                                    </h2>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-738c399 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="738c399"
                                data-element_type="widget"
                                data-widget_type="divider.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-divider">
                                        <span className="elementor-divider-separator"></span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-1185885 elementor-tablet-align-center elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="1185885"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                            >
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/mentions-legales">
                                                <span className="elementor-icon-list-text">
                                                    Mentions légales{" "}
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/conditions-generales-de-vente">
                                                <span className="elementor-icon-list-text">
                                                    {" "}
                                                    ⁠Conditions générales de
                                                    vente
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/conditions-generales-dutilisation">
                                                <span className="elementor-icon-list-text">
                                                    ⁠Conditions générale
                                                    d’utilisation
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/politique-de-confidentialite">
                                                <span className="elementor-icon-list-text">
                                                    Politique de confidentialité
                                                </span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://www.myflair.fr/foire-aux-questions/">
                                                <span className="elementor-icon-list-text">
                                                    FAQ
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-53b82ca e-con-full e-flex e-con e-parent"
                    data-id="53b82ca"
                    data-element_type="container"
                    data-settings='{"content_width":"full","background_background":"classNameic"}'
                    data-core-v316-plus="true"
                >
                    <div
                        className="elementor-element elementor-element-6249935 elementor-widget elementor-widget-text-editor"
                        data-id="6249935"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                    >
                        <div className="elementor-widget-container">
                            <p>
                                © 2024 MyFlair.fr — Tous droits réservés —
                                Propulsé par Webinflu
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Home;
