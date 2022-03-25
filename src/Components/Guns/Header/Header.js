import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
               <div className='headerName'>
                    <h3>Kopa Samsu Store</h3>
               </div>
               <div className='headerItem'>
               <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
               <a href="/shopping-cart"> <FontAwesomeIcon icon={faShoppingCart} /></a>
               </div>
            </nav>
        </div>
    );
};

export default Header;