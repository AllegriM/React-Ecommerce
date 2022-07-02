import { Button, Text } from "@chakra-ui/react"

export const AddCartButton = ( {addToCart, cart, item, prodAmount} ) => {
    
    let isInCart = cart.some( itemInCart => itemInCart.id === item.id)

    const addItem = () =>{
        if (isInCart) {
            cart.find( itemInCart => itemInCart.id === item.id).cantidadElegida += prodAmount;
        }else{
            addToCart([...cart, {...item, cantidadElegida: prodAmount}])
        }
    }
    
    return (
        <Button type="submit" className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' onClick={addItem}>
            <Text className="andes-button__content">Agregar al carrito</Text>
        </Button>
    )
}
