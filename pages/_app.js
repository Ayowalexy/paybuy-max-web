import { ActiveContextProvider } from '../public/context/active.context'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "../styles/theme"
export default function MyApp({ Component, pageProps }) {
  return(
  <ActiveContextProvider>
  <ChakraProvider theme={theme}>
  <Component {...pageProps} />
    </ChakraProvider>
  </ActiveContextProvider>
    )
}
