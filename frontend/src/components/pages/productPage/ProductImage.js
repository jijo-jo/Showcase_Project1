import React from 'react';

const ProductImage = ({ watch }) => {
    return (
        <div className="product-image">
            <img src={"/images/products/sw325-image-1.jpg"} alt={watch?.ModelInfo} />
        </div>
    )
}

export default ProductImage;