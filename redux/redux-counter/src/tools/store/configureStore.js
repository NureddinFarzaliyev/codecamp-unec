import { createStore } from "redux";

import { counterReducer } from "../reducers/counterReducer";

const configureStore = () => {
    const store = createStore(counterReducer);
    return store;
}

export default configureStore;