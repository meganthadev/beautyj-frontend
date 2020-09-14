import React from 'react';
import DetailContainer from '../containers/DetailContainer';

import { Redirect } from 'react-router-dom'

const Product = (props) => {


    let product = props.products[props.match.params.id - 1]


    return (
        <div>
            <h2>
                {product ? product.name : null} - Your Rating: {product ? product.rating : null}
            </h2>
            <DetailContainer product={product}/>
        </div>
    )


}

export default Product