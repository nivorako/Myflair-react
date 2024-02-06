import React from 'react';
import PropTypes from 'prop-types';

import "./index.css";

const Drawer = ({navItems}) => {
    return (
        <div className='drawer' id="drawer">
            {
                 navItems.map((item, index) => {
                    return(
                        <a
                            href="https://www.myflair.fr/#espace"
                            className="drawer-navLink"
                            rel="noopener noreferrer"
                            key={index}
                        >
                            <li 
                                
                                className="drawer-navItem"
                                aria-label={`Navigate to ${item}`}
                                role="button"
                                tabIndex={`${index}`}
                            >
                                
                                    {item}
                                
                            </li>
                        </a>
                    )
                })
            }
        </div>
    )
}

Drawer.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Drawer
