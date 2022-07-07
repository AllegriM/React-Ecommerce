import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones 

    const [orderId, setOrderId] = useState("")

    const [cart, setCart] = useState([])

    // Add item to cart function
    const addToCart = (item) => {
        setCart(item)
    }
    
    // Remove item to cart function
    const removeItem = (id) => {
        setCart(cart.filter( (item) => item.id !== id))
    }


    return (
        <CartContext.Provider value={{
            cart,
            orderId,
            addToCart,
            removeItem,
            setCart,
            setOrderId
        }}
        >
            {children}
        </CartContext.Provider>
    )
}