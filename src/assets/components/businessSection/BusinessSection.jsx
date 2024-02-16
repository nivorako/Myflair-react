import React from 'react';
import "./index.css";

const BusinessSection = ({id, title}) => {
  return (
    <div className='businessSection' id={id}>
        <h2 className='businessSection-title'>
            {title}
        </h2>
    </div>
  )
}

export default BusinessSection
