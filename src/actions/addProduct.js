
export const addProduct =  (data) => {

    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/products', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(product => dispatch({type: 'ADD_PRODUCT', payload: product }))
    }
 }
