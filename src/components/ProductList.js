import React from 'react';
import Product from './Product'
import { Route, Link } from 'react-router-dom';


const ProductList = (props) => {

    return (
        <div>
            {props.products.map(product =>
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>)}
        </div>
    )

}

export default ProductList