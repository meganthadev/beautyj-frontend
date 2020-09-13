import React from 'react';

const ProductList = (props) => {

    return (
        <div>
            {props.products.map(product => <li key={product.id}>{product.name} - {product.image_url} - {product.rating}</li>
            )}
        </div>
    )

}

export default ProductList