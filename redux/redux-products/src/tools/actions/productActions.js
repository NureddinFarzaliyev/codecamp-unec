

export const getProducts = () => {
    return {
        type: "GET_PRODUCTS"
    }
}

export const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: {
            id: id
        }
    }
}

export const addProduct = (productName) => {
    return {
        type: "ADD_PRODUCT",
        payload: {
            name: productName
        }
    }
}