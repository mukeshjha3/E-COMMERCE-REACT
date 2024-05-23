import React from 'react'
import './Breadcrum.css';
import arrow_icon from '../Assests/breadcrum_arrow.png';

const Breadcrum = (props) => {

    const {product} = props;
    console.log(product);
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="arrow-icon" />
        SHOP <img src={arrow_icon} alt="arrow-icon1" />
        {product.category} <img src={arrow_icon} alt="arrow-icon2" />
        {product.name}
    </div>
  )
}

export default Breadcrum