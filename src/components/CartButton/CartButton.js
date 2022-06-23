import { Button, Text } from "@chakra-ui/react"

export const CartButton = ( {addToCart, cart, item, prodAmount} ) => {

    const addItem = () =>{
        if (cart.some( (itemInCart)=>itemInCart.id === item.id) ) {
            item.cantidadElegida += prodAmount
            // Aumentar en x la cantidad de productos
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
