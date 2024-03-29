import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Logo = () =>  {
    return (
        <ul className="menu-item nav">
            <li className="nav-item"><NavLink to="/#app">Home</NavLink></li>
            <li className="nav-item">
                <span>Shop</span>
                <ul className="sub-menu">
                    <li className="category-item all"><NavLink to="/allproducts#app">All Products</NavLink></li>
                </ul>
            </li>
            <li className="nav-item"><NavLink to="/aboutus#app">About us</NavLink></li>
            <li className="nav-item">Contact</li>
        </ul>
    )
}

export default Logo;