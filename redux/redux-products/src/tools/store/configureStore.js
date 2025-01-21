import { createStore } from "redux";
import { productReducer } from "../reducers/productReducer";

export const configureStore = () => {
    const store = createStore(productReducer)
    return store;
}