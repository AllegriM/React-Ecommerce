import { useState } from "react"
import { AmountContextProvider } from "../Context/amountSelContext"

export const SelectQuantity = ({ prodQuantity, setProdAmount }) => {
    
    const [quantity, setQuantity] = useState(1)

    const onSelect = prodQuantity => {
        console.log(prodQuantity)
        setProdAmount(Number(prodQuantity))
        setQuantity(prodQuantity)
    }

    let prodAmount = prodQuantity > 6 ? [1, 2, 3, 4, 5, 6] : [prodQuantity]

    return (
        <select className='select-quantity' onChange={(e) => onSelect(e.target.value)}>
            {
                prodAmount.map((val, index) => (
                    <option className='quantity-option' key={index} value={val}>
                        {
                            val === 1 ? `${val} unidad` :
                                `${val} unidades`
                        }
                    </option>
                ))
            }
        </select>
    )
}