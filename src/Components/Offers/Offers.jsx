import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right"></div>
        <img src={exclusive_image} alt="exclusive-image" />
    </div>
  )
}

export default Offers