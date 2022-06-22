import React from 'react'
import { useCartContext } from '../Context/cartContext'

export const Cart = () => {
    const { cart } = useCartContext()
    console.log(cart)

    return (
        <>
            {
                cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <li>{item.title}</li>
                            <img src={item.thumbnail} />
                            <span>{item.cantidadElegida}</span>
                        </div>
                    )
                })
            }
        </>
    )
}
