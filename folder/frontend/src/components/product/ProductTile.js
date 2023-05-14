import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const ProductTile = (props) => {
    var role = localStorage.getItem("Role");
    const editpage = ()=>{
        window.location = `/editwatch/${ props.watch.Id}`
    }
    return (
        <div className="product-tile">
            <NavLink to={"/product/" + props.watch.Id}>
                <img className="product-tile-image" src={props.watch.Image} alt={props.watch.ModelInfo} />
                <span className="product-tile-details name">{props.watch.Name}</span>
                <span className="product-tile-details price">Rs{props.watch.Price}</span>
            </NavLink>
        {role =="Manager" &&<button onClick={editpage}>Edit Details</button>}
        </div>
    )
}

export default ProductTile;