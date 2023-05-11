import React from 'react';
import AddToCart from './AddToCart';
import AddtoCartfunctionn from './Addtocartfunction';

const ProductDetails = ({ watch }) => {
    return (
        <div className="product-details">
            <div className="product-name">
                <h1 className="product-title">{watch?.Name}</h1>
                <span className="model-number">{watch?.ModelInfo}</span>
            </div>

            <p className="product-price">
                {"Rs " + watch?.Price + ".00"}
            </p>

            <p className="product-description">
                {watch?.Description}
            </p>

            {/* <AddToCart watch={watch} /> */}
            <AddtoCartfunctionn watch={watch}/>
        </div>
    )
}

export default ProductDetails;