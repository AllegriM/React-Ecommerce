import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones 

    const [cart, setCart] = useState([])


    const addToCart = (item) => {
        setCart(item)
        // localStorage.setItem("cart", JSON.stringify(item));
    }

    const removeItem = (id) => {
        setCart(cart.filter( (item) => item.id !== id))
        // localStorageCart.filter( (item) => item.id !== id) 
        // let indexOfItem = localStorageCart.findIndex(item => item.id === id)
        // localStorageCart.splice(indexOfItem, 1)
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