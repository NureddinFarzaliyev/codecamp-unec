import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import configureStore from './tools/store/configureStore.js'
import { decrement, increment, reset } from './tools/actions/counterActions.js'

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(increment(1));
store.dispatch(reset())
store.dispatch(decrement(5));
store.dispatch(increment(10));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)