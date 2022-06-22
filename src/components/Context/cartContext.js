import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{
    // estados y funciones 

    const [cart, setCart] = useState([])

    const addToCart = (item) =>{
        setCart(item)
    }

    const removeItem = (id) =>{
        setCart()
    }

    // const isInCart (id) => {

    // }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}