import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const ProductTile = (props) => {
    return (
        <div className="product-tile">
            <NavLink to={"/product/" + props.watch.Id + "#app"}>
                <img className="product-tile-image" src={"/images/products/sw519-image-1.jpg"} alt={props.watch.ModelInfo} />
                <span className="product-tile-details name">{props.watch.Name}</span>
                <span className="product-tile-details price">Rs{props.watch.Price}</span>
            </NavLink>
        </div>
    )
}

export default ProductTile;