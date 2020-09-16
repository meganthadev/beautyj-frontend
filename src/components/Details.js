import React from 'react'


const Details = (props) => {
   return (
      <div>
         <h3>Product Details: </h3>
         <p>{props.detail && props.detail.description}</p>
         <h4>Your Review: </h4>
         <p>{props.detail && props.detail.full_review}</p>
         <h4>Ingredients: </h4>
         <p>{props.detail && props.detail.ingredients}</p>
      </div>
   )
}

export default Details