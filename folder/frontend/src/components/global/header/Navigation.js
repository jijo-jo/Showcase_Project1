import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
const Logo = () =>  {
    var role = localStorage.getItem("Role");
    return (
        <ul className="menu-item nav">
            <li className="nav-item"><NavLink to="/home">Home</NavLink></li>
          {role == 'Deliveryboy' && <li className="nav-item"><NavLink to="/deliverypage">Deliverylist</NavLink></li>}
          {role == 'Super_Admin' &&<li className="nav-item"><Link to="/employeelist">Employee List</Link></li>}
          {role != 'Deliveryboy' && <li className="nav-item">
                        <span>Shop</span>
                        <ul className="sub-menu">
                        <li className="category-item all"><NavLink to="/allproducts">All Products</NavLink></li>
                        </ul>
            </li>}
          {role == 'Manager' && <li className="nav-item"><NavLink to="/orderdetails">Orders to Approve</NavLink></li>}
          {role == 'Manager' && <li className="nav-item"><NavLink to="/orderstodelver">Orders to Deliver</NavLink></li>}
          {role == 'User' && <li className="nav-item"><NavLink to="/orderofuser">Orders</NavLink></li>}
          {role == 'Manager' && <li className="nav-item"><NavLink to="/addnewwatch">Add new watches</NavLink></li>}
            <li className="nav-item"><NavLink to="/aboutus">About us</NavLink></li>
            <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    )
}

export default Logo;