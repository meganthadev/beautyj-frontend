import React from 'react';

const Product = (props) => {

    let product = props.products.filter(product => product.id == props.match.params.id)[0]

    return (
        <li>
           {product ? product.name : null} - {product ? product.rating : null}
        </li>
    )


}

export default Product