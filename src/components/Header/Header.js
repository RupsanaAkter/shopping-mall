import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className='navi'>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    <Link to="/addtocart"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;