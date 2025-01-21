import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { configureStore } from './tools/store/configureStore.js'
import { addProduct, deleteProduct, getProducts } from './tools/actions/productActions.js'

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(getProducts())
store.dispatch(deleteProduct(0))
store.dispatch(addProduct("Product 3"))
store.dispatch(addProduct("Product 4"))
store.dispatch(addProduct("Product 5"))
store.dispatch(deleteProduct(2))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
