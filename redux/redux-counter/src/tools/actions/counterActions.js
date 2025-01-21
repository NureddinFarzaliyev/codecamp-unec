export const increment = (amount) => {
    return {
        type: "INCREMENT",
        payload: amount || 1
    }
}

export const decrement = (amount) => {
    return {
        type: "DECREMENT",
        payload: amount || 1
    }
}

export const reset = () => {
    return {
        type: "RESET"
    }
}