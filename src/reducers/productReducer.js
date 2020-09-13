
export default function productReducer(state = { products: [] }, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return { products: action.payload }
        case 'ADD_PRODUCT':
            return {...state, accounts: [...state.products, action.paylod]}
        default:
            return state
    }
}

