import React from 'react'

const Details = (props) => {

     return (
        <div>
            {props.details && props.details.map(detail =>
                <li key={detail.id}> {detail.description} </li>
            )}
        </div>
    )
}

export default Details