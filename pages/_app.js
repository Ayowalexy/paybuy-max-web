import { ActiveContextProvider } from "../public/context/active.context";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store, persistor } from "../public/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { VerifyContextProvider } from "../public/context/verify.context";
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <VerifyContextProvider>
          <ActiveContextProvider>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
              <ToastContainer />
            </ChakraProvider>
          </ActiveContextProvider>
        </VerifyContextProvider>
      </PersistGate>
    </Provider>
  );
}
