import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/home_img.png'
import './hero.css'

const hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div className='hero-hand-icon'>
                <p>NEW <img  src={hand_icon} alt=''/></p>
                <p>Collections</p>
                <p>For Everyone</p>

            </div>
            <div className='hero-latest-btn'>
                <div>
                    Latest Collection
                </div>
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt=""/>
        </div>
      
    </div>
  );
}

export default hero
