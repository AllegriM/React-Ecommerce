import { createContext, useContext, useEffect, useState } from "react";
import { AmountContext } from "./amountSelContext";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const { amount } = useContext(AmountContext)
    // estados y funciones 

    const [quantity, setQuantity] = useState()
    const [orderId, setOrderId] = useState("")
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState()




    const addQuantity = () => {
        setQuantity(cart.reduce((acum, el) => acum + el.selectedQuantity, 0))
    }

    const addTotal =()=>{
        setTotal( cart.reduce( (acum,el) => acum + (el.selectedQuantity * el.price), 0 ) )
    }

    // Add item to cart function 
    const addToCart = (item) => {
        const isInCart = cart.some(itemInCart => itemInCart.id === item.id)
        if (isInCart) {
            const index = cart.findIndex(el => el.id === item.id)
            const addQuantity = cart[index].selectedQuantity + amount
            cart[index].selectedQuantity = addQuantity
        } else {
            setCart([...cart, { ...item, selectedQuantity: amount }])
        }
        addQuantity()
        addTotal()
    }

    useEffect(()=>{
        addQuantity()
        addTotal()
    }, [cart])

    // Remove item to cart function
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const cleanCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            orderId,
            quantity,
            total,
            addQuantity,
            cleanCart,
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