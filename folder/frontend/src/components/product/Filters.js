import React from 'react';
import FilterType from './FilterType'

const Filters = (props) => {
    return (
        <div className="product-filters">
            <p className="filters-title">Filter by</p>
            <div action="" className="filters-wrapper">
                {(props.brand !== "") ?
                    <span className="applied-filter-name" onClick={() => props.handleRemoveFilter("brand")}>{props.brand}</span>
                    :
                    <FilterType type="brand" name="Brand" handleAddFilter={props.handleAddFilter} />
                }

                {(props.color !== "") ?
                    <span className="applied-filter-name" onClick={() => props.handleRemoveFilter("color")}>{props.color}</span>
                    :
                    <FilterType type="color" name="Color" handleAddFilter={props.handleAddFilter} />
                }

                {(props.category !== "") ?
                    <span className="applied-filter-name" onClick={() => props.handleRemoveFilter("category")}>{props.category}</span>
                    :
                    <FilterType type="category" name="Category" handleAddFilter={props.handleAddFilter} />
                }
            </div>
        </div>
    )
}

export default Filters;