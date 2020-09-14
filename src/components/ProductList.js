import React from 'react';
import { Link } from 'react-router-dom';




const ProductList = (props) => {

    return (
        <div>
            {props.products.map(product =>
                <li key={product.name}>
                    <Link to={`/products/${product.name}`}>{product.name}</Link>
                </li>)}
        </div>
    )

}

export default ProductList;