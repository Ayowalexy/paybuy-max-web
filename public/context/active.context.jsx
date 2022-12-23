import {createContext, useContext, useState} from "react";

const ActiveContext = createContext({})
export const ActiveContextProvider = ({children}) => {
    const [active, setActive] = useState("Dashboard");
    const value = {active, setActive}
    return(
        <ActiveContext.Provider value={value}>{children}</ActiveContext.Provider>
    )

}
export const useActive = () => useContext(ActiveContext)