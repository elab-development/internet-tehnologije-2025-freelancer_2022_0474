import React from 'react'
import { FaUpwork } from "react-icons/fa6";

import '../css/Track.css'

const Track = () => {

    const services = [
        'Find jobs easily',
        'Remote employment',
        'Connecting with clients',
        'Secure payments',
        'Diverse job categories',
        '24/7 support',
    ];

  return (
     <div className="scrolling-bar">
            <div className="scrolling-track">
                {[...services, ...services].map((service, index) => (
                    <div className="scrolling-item" key={index}>
                        <FaUpwork className="tooth-icon" />
                        <h2>{service}</h2>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Track