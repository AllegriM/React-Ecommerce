import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones 

    const [orderId, setOrderId] = useState("")

    const [cart, setCart] = useState([])

    const localStorageCart = JSON.parse(localStorage.getItem('cart')) 


    const addToCart = (item) => {
        setCart(item)
        // Add item to LocalStorage
        localStorage.setItem("cart", JSON.stringify(item));
    }

    const removeItem = (id) => {
        setCart(cart.filter( (item) => item.id !== id))
        // Remove item from LocalStorage
        let newCart = localStorageCart.filter( (item) => item.id !== id)
        localStorage.removeItem("cart")
        localStorage.setItem("cart", JSON.stringify(newCart))
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