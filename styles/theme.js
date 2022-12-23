import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: '#DD1818',
    secondary: '#fff',
    tertiary: '#676767',
    green: '#0F9F26',
    orange: '#F24405'
  },
}

export const theme = extendTheme({ colors })