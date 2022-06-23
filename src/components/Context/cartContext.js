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

    // const addQuantity = (itemId) => {
    //     cart.map((item) => {
    //         if (item.id === itemId) {
    //             return setCart(item.cantidadElegida + 1)
    //         }
    //     })
    // }

    // const reduceQuantity = (itemId) => {
    //     cart.map((item) => {
    //         if (item.id === itemId) {
    //             return setCart(item.cantidadElegida - 1)
    //         }
    //     })
    // }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            // addQuantity,
            // reduceQuantity
        }}
        >
            {children}
        </CartContext.Provider>
    )
}