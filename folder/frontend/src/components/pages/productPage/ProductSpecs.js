import React from 'react';

const ProductSpecs = ({ watch }) => {
    const units = {
        mm: "mm",
        m: "m"
    };
    return (
        <div className="product-specs">
            <h2 className="product-specs-title">
                Product Specifications
            </h2>
            <ul className="specs-list">
                <li className="spec-item"><span className="spec-text spec-item-name">Name</span>  <span className="spec-text spec-item-value">{watch.ModelInfo}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Brand</span>  <span className="spec-text spec-item-value">{watch.Brand}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Description</span>  <span className="spec-text spec-item-value">{watch.Description}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">WarantyPeriod(Months)</span>  <span className="spec-text spec-item-value">{watch.WarantyPeriod}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Color</span>  <span className="spec-text spec-item-value">{watch.Color}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Use by</span>  <span className="spec-text spec-item-value">{watch.For_whom}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Price(Rs)</span>  <span className="spec-text spec-item-value">{watch.Price}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Offer</span>  <span className="spec-text spec-item-value">{watch.Offer}</span></li>
                <li className="spec-item"><span className="spec-text spec-item-name">Stock Available</span>  <span className="spec-text spec-item-value">{watch.Stockavailable}</span></li>
                
            </ul>
        </div>
    )
}

export default ProductSpecs;