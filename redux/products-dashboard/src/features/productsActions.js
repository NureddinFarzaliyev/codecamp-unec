import { PRODUCTS_ACTIONS } from "./productsReducer";

export const addProduct = (product) => {
    return {
        type: PRODUCTS_ACTIONS.ADD_PRODUCT,
        payload: product
    }
}

export const editProduct = (product) => {
    return {
        type: PRODUCTS_ACTIONS.EDIT_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (id) => {
    return {
        type: PRODUCTS_ACTIONS.DELETE_PRODUCT,
        payload: id
    }
}