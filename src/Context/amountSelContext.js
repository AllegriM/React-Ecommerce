import { createContext, useState } from "react";

export const AmountContext = createContext([])

export const AmountContextProvider = ({children}) =>{

    // States and functions

    const [amount, setAmount] = useState([])

    const setProdAmount = (item) =>{
        setAmount(item)
    }

    return(
        <AmountContext.Provider value={{
            amount,
            setProdAmount
        }}
        >
            {children}
        </AmountContext.Provider>
    )
}