import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
const Logo = () =>  {
    var role = localStorage.getItem("Role");
    return (
        <ul className="menu-item nav">
            <li className="nav-item"><NavLink to="/home#app">Home</NavLink></li>
            <li className="nav-item"><Link to="/addemployee#app">Add Employee</Link></li>
            <li className="nav-item">
                <span>Shop</span>
                <ul className="sub-menu">
                    <li className="category-item all"><NavLink to="/allproducts#app">All Products</NavLink></li>
                </ul>
            </li>

            <li className="nav-item"><NavLink to="/aboutus#app">About us</NavLink></li>
            <li className="nav-item"><NavLink to="/contact#app">Contact</NavLink></li>
        </ul>
    )
}

export default Logo;