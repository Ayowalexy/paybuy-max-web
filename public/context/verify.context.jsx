import { createContext, useState, useContext } from "react";

const VerifyContext = createContext({})
export const VerifyContextProvider = ({children}) => {
    const [email, setEmail] = useState("");
    const value = {email, setEmail}
    return(
        <VerifyContext.Provider value={value}>{children}</VerifyContext.Provider>
    )

}
export const useVerify = () => useContext(VerifyContext)