import { ThemeProvider } from './ThemeContext'
import ActiveFilterProvider from './ActiveFilterProvider'
import FilterProvider from './FilterProvider'
import { DataProvider } from './DataProvider'
import { CurrencyProvider } from './CurrencyContext'

const Contexts = ({children}) => {
  return (
    <ThemeProvider>
    <ActiveFilterProvider>
    <FilterProvider>
    <DataProvider>
    <CurrencyProvider>

      {children}

    </CurrencyProvider>
    </DataProvider>
    </FilterProvider>
    </ActiveFilterProvider>
    </ThemeProvider>
  )
}

export default Contexts
