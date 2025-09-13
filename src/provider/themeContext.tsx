import { createContext, useState, type ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, type ThemeType } from '../helpers/themes'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const selectedTheme: ThemeType = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={selectedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
