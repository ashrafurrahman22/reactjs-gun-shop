import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Gun.css'

const Gun = ({gun, handleAddToCart}) => {
    const {img, name, price, bullet, category, action, capacity } = gun;

    return (
        <div className='gun'>
            <img src={img} alt="" />
            <div className="specification">
            <h4>{name}</h4>
            <p>Category: {category}</p>
            <p>Action: {action}</p>
            <p>Bullet: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Price: ${price}</p>
            </div>
            <button onClick={ () => handleAddToCart(gun)} className='cartbtn'>Add To Cart <FontAwesomeIcon className='icon' icon={faShoppingCart}/> </button>
        </div>
    );
};

export default Gun;