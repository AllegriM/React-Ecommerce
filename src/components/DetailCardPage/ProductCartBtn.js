import { Button, Text } from "@chakra-ui/react"

export const AddCartButton = ({ addToCart, cart, item, prodAmount }) => {

    let isInCart = cart.some(itemInCart => itemInCart.id === item.id)

    // Add items depending if is in cart or sum more quantity

    const addItem = () => {
        if (isInCart) {
            // if (cart.find(itemInCart => itemInCart.id === item.id).cantidadElegida >= item.available_quantity) return item.available_quantity
            // else{
                cart.find(itemInCart => itemInCart.id === item.id).cantidadElegida += prodAmount;
                // }
            } else {
                addToCart([...cart, { ...item, cantidadElegida: prodAmount }])
            }
    }

    return (
        <Button type="submit" className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' onClick={addItem}>
            <Text>Agregar al carrito</Text>
        </Button>
    )
}
