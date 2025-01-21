
const initialState = [
    {
        id: 0,
        name: "Product 1",
    },
    {
        id: 1,
        name: "Product 2",
    },
]


export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return state;
        case "DELETE_PRODUCT":
            return state.filter(product => product.id !== action.payload.id);
        case "ADD_PRODUCT":
            return [...state, {name: action.payload.name, id: state.length}];
        default:
            return state;
    }
}