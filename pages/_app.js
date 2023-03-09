import { ActiveContextProvider } from "../public/context/active.context";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "../public/redux/store";
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ActiveContextProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
          <ToastContainer />
        </ChakraProvider>
      </ActiveContextProvider>
    </Provider>
  );
}
