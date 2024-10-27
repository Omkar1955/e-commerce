import React from 'react'
import './Offers.css'
import Exclusive_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offer-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
            

        </div>
        <div className='offer-right'>
            <img src={Exclusive_img} alt="Exclusive Offers" />
        </div>


        
      
    </div>
  )
}

export default Offers
