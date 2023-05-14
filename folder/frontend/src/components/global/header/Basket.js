import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { connect } from 'react-redux';

const Basket = (props) =>  {
    
    return (
        <div className="menu-item cart">
            <NavLink to="/cartfunction">
                <span className="basket">
                    <i className="fas fa-shopping-cart"></i>
                </span>
            </NavLink>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        qty: state.quantityTotal
    }
}

export default connect(mapStateToProps)(Basket);