import React from 'react';
import Product from './Product'
import { Route } from 'react-router-dom';


const ProductList = (props) => {

    return (
        <div>
            {props.products.map(product =>
                <div key={product.id}><Product product={product} /></div>)}
        </div>
    )

}

export default ProductList