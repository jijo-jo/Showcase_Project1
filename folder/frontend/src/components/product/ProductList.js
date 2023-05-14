import React,{useEffect,useState} from 'react';
import ProductTile from './ProductTile';
import Filters from './Filters';
import NoResults from '../pages/NoResults';
// import { watches } from '../../api/watches';
import { getAllwatches } from '../api';


class ProductList extends React.Component {
    constructor() {
        super();

        this.state = {
            watches: [],
            filteredWatches: [],
            filters: {
                brand: "",
                color: "",
                category: ""
            }
        }

        this.displayProductList = this.displayProductList.bind(this);
        this.filterProducts = this.filterProducts.bind(this);
        this.handleAddFilter = this.handleAddFilter.bind(this);
        this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
    }

    displayProductList() {
        const productList = this.state.watches.filter(watch => watch.category === this.props.category);
        this.setState({ watches: productList });
    }

    filterProducts() {
        const filters = this.state.filters;
        let filteredWatches = [];
        if (filters.brand !== "" && filters.color === "" && filters.category === "") {
            filteredWatches = this.state.watches.filter(watch => watch.Brand === this.state.filters.brand);
        } else if (filters.brand === "" && filters.color !== "" && filters.category === "") {
            filteredWatches = this.state.watches.filter(watch => watch.Color === this.state.filters.color);
        } else if (filters.brand === "" && filters.color === "" && filters.category !== "") {
            filteredWatches = this.state.watches.filter(watch => watch.For_whom === this.state.filters.category);
        } else if (filters.brand !== "" && filters.color !== "" && filters.category === "") {
            filteredWatches = this.state.watches.filter(watch => watch.Brand === this.state.filters.brand && watch.Color === this.state.filters.color );
        } else if (filters.brand !== "" && filters.color === "" && filters.category !== "") {
            filteredWatches = this.state.watches.filter(watch => watch.Brand=== this.state.filters.brand && watch.For_whom === this.state.filters.category );
        } else if (filters.brand === "" && filters.color !== "" && filters.category !== "") {
            filteredWatches = this.state.watches.filter(watch => watch.Color === this.state.filters.color && watch.For_whom === this.state.filters.category );
        } else if (filters.brand !== "" && filters.color !== "" && filters.category !== "") {
            filteredWatches = this.state.watches.filter(watch => watch.Brand === this.state.filters.brand && watch.Color === this.state.filters.color && watch.For_whom === this.state.filters.category );
        }
        this.setState({filteredWatches});
    }

    handleAddFilter(name, type) {
        let initial = {...this.state.filters};
        initial[type] = name;
        this.setState({ filters: initial }, this.filterProducts);
    }

    handleRemoveFilter(filter) {
        let initial = {...this.state.filters};
        initial[filter] = "";
        this.setState({ filters: initial }, this.filterProducts);
    }

    componentDidMount() {
        getAllwatches()
       .then((res)=>{
          console.log(res.data)
          this.setState({watches:res.data})
       }).catch(err=>{console.log(err)})
    }

    render() {
        const hasFilters = (this.props.category === "all" && this.props.limit !== 0);
        const filters = this.state.filters;
        const showWatches = (filters.brand !== "" || filters.color !== "" || filters.category !== "") ? "filteredWatches" : "watches";
        const limit = (this.props.limit > 0) ? this.props.limit : this.state.watches.length;
        let hasWatches = this.state[showWatches].length;
        return (
            <div className={hasFilters ? "product-list" : "product-list filters"}>
                {hasFilters ? "" : <Filters
                                        brand={this.state.filters.brand}
                                        color={this.state.filters.color}
                                        category={this.state.filters.category}
                                        handleAddFilter={this.handleAddFilter}
                                        handleRemoveFilter={this.handleRemoveFilter}
                                    />}

                {hasWatches ?
                    <div className="product-grid">
                        {this.state[showWatches].slice(0, limit).map(index =>
                            <ProductTile key={index.Id} watch={index} />
                        )}
                    </div>
                    :
                    <NoResults />
                }
            </div>
        )
    }
}

export default ProductList;