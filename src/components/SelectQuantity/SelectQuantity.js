import { Flex, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import theme from "../../theme"
import '../ProductDetailCard/product.css'

export const SelectQuantity = ({ prodQuantity, setProdAmount }) => {

    const [quantity, setQuantity] = useState(1)

    useEffect(()=>{
        setProdAmount(Number(quantity))
    }, [quantity])

    let totalAmount = [...Array(prodQuantity).keys()]
    let prodAmount = totalAmount.map((prod) => prod + 1)

    return (
        <Flex>
            <Select iconColor={theme.colors.blue} border='none' bg='transparent' size='md' w='auto' className='dropdown' onChange={(e) => setQuantity(e.target.value)}>
                {
                    prodAmount.length > 6 ?
                        prodAmount.slice(0, 6).map((val, index) => (
                            <option className='dropdownItem' key={index} value={val}>
                                {
                                    val === 1 ? `${val} unidad` :
                                        `${val} unidades`
                                }
                            </option>
                        ))
                        :
                        prodAmount.map((val, index) => (
                            <option className='dropdownItem' key={index} value={val}>
                                {
                                    val === 1 ? `${val} unidad` :
                                        `${val} unidades`
                                }
                            </option>
                        ))
                }
            </Select>
        </Flex>
    )
}