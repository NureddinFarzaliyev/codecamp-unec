import { ThemeProvider } from './ThemeContext'
import ActiveFilterProvider from './ActiveFilterProvider'
import FilterProvider from './FilterProvider'
import { DataProvider } from './DataProvider'
import { CurrencyProvider } from './CurrencyContext'
import { CartProvider } from 'react-use-cart'

const Contexts = ({children}) => {
  return (
    <ThemeProvider>
    <ActiveFilterProvider>
    <FilterProvider>
    <DataProvider>
    <CurrencyProvider>
    <CartProvider>

      {children}

    </CartProvider>
    </CurrencyProvider>
    </DataProvider>
    </FilterProvider>
    </ActiveFilterProvider>
    </ThemeProvider>
  )
}

export default Contexts
