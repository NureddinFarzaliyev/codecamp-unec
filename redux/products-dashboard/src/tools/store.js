import { combineReducers, createStore } from "redux";
import { productsReducer } from "../features/productsReducer";

export const store = createStore(combineReducers({
    products: productsReducer
}));