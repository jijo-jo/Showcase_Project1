import React, { useEffect } from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductSpecs from './ProductSpecs';
// import { watches } from '../../../api/watches';
import { useState } from 'react';
import { getAllwatches } from '../../api';

const ProductPage = (props) => {
    const [watch,setWatch] = useState([]);
    const [watches,setWatches] = useState([]);
    const getwatchfromapi= () =>{
         getAllwatches()
        .then((res)=>{
           console.log(res.data)
           setWatches(res.data);
           setWatch(res.data.filter(watch => watch.Id == props.match.params.productnumber));
        }).catch(err=>{console.log(err)})
    }
    useEffect(()=>{
    //    getwatchfromapi();
       getAllwatches()
       .then((res)=>{
          console.log(res.data)
          setWatches(res.data);
          setWatch(res.data.filter(watch => watch.Id == props.match.params.productnumber));
       }).catch(err=>{console.log(err)})
    },[])
    return (
        <div className="product-page content-wrapper">
            {watch[0]&&
            <div className="product-wrapper">
                <ProductImage watch={watch[0]} />
                <ProductDetails watch={watch[0]} />
            </div>}

           {watch[0] && <div className="product-specs">
                <ProductSpecs watch={watch[0]} />
            </div>}
        </div>
    )
}

export default ProductPage;