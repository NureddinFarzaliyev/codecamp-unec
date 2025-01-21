const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT": {
            return{
                ...state,
                count: state.count + action.payload
            }
        }
        case "DECREMENT": {
            return{
                ...state,
                count: state.count - action.payload
            }
        }
        case "RESET": {
            return{
                ...state,
                count: 0
            }
        }
    }

}