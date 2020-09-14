import React from 'react';
import {Redirect} from 'react-router-dom'

import DetailContainer from '../containers/DetailContainer'


const Product = (props) => {

    let product = props.products.filter(product => product.name === props.match.params.name)[0]
    
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