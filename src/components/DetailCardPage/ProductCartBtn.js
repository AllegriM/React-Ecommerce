import { Button, Text } from "@chakra-ui/react"

export const AddCartButton = ({ addToCart, item }) => {

    return (
        <Button type="submit" className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' onClick={() => addToCart(item)}>
            <Text>Agregar al carrito</Text>
        </Button>
    )
}

// const addItem = () => {
//     if (isInCart) {
//         // if (cart.find(itemInCart => itemInCart.id === item.id).cantidadElegida >= item.available_quantity) return item.available_quantity
//         // else{
//             cart.find(itemInCart => itemInCart.id === item.id).cantidadElegida += prodAmount;
//             // }
//         } else {
//             addToCart([...cart, { ...item, cantidadElegida: prodAmount }])
//         }
// }