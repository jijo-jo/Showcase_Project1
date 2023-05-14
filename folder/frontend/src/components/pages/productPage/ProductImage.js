import React from 'react';

const ProductImage = ({ watch }) => {
    return (
        <div className="product-image">
            <img src={watch.Image} alt={watch?.ModelInfo} />
        </div>
    )
}

export default ProductImage;