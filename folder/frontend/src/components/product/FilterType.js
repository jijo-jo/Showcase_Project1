import React from 'react';
import Filter from './Filter';

const FilterType = (props) => {
    let filterType;

    switch(props.type) {
        case "brand":
            filterType =
                <ul className="filter-list">
                    <Filter type={props.type} name="rolex" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="titan" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="fastrack" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="mi" handleAddFilter={props.handleAddFilter}/>
                </ul>
            break;
        case "color":
            filterType =
                <ul className="filter-list">
                    <Filter type={props.type} name="red" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="blue" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="green" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="white" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="black" handleAddFilter={props.handleAddFilter}/>
                    
                </ul>
            break;
        case "category":
            filterType =
                <ul className="filter-list">
                    <Filter type={props.type} name="men" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="women" handleAddFilter={props.handleAddFilter}/>
                    <Filter type={props.type} name="children" handleAddFilter={props.handleAddFilter}/>
                </ul>
            break;
        default:
            filterType = "";
    }
    return (
        <div className="filters-section">
            <span className="filter-name">{props.name}</span>
                {filterType}
        </div>
    )
}

export default FilterType;