const initialState = []

export const PRODUCTS_ACTIONS = {
    ADD_PRODUCT: "ADD_PRODUCT",
    EDIT_PRODUCT: "EDIT_PRODUCT",
    DELETE_PRODUCT: "DELETE_PRODUCT"
}

export const productsReducer = (state=initialState, action) => {
    switch (action.type) {
        case PRODUCTS_ACTIONS.ADD_PRODUCT:
            return [...state, {...action.payload, id: state.length + 1}]
        case PRODUCTS_ACTIONS.EDIT_PRODUCT:
            return state.map((product) => {
                if(product.id === action.payload.id){
                    return action.payload
                }else{
                    return product
                }
            })
        case PRODUCTS_ACTIONS.DELETE_PRODUCT:
            return state.filter((product) => product.id !== action.payload)
        default:
            return state
    }
}