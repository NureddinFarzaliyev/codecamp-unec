import { ThemeProvider } from './ThemeContext'

const Contexts = ({children}) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

export default Contexts
