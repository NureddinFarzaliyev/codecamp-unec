import { ThemeProvider } from './ThemeContext'
import ActiveFilterProvider from '../contexts/ActiveFilterProvider'
import FilterProvider from '../contexts/FilterProvider'
import { DataProvider } from '../contexts/DataProvider'

const Contexts = ({children}) => {
  return (
    <ThemeProvider>
      <ActiveFilterProvider>
        <FilterProvider>
          <DataProvider>
            {children}
          </DataProvider>
        </FilterProvider>
      </ActiveFilterProvider>
    </ThemeProvider>
  )
}

export default Contexts
