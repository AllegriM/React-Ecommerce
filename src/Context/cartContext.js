import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones 

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart(item)
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            setCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}