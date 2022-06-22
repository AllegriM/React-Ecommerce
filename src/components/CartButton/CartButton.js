import { Button, Text } from "@chakra-ui/react"

export const CartButton = ( {addItem, cart, item, prodAmount} ) => {

    const addToCart = () =>{
        addItem([...cart, {...item, cantidadElegida: prodAmount}])
    }
    
    return (
        <Button type="submit" className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' onClick={addToCart}>
            <Text className="andes-button__content">Agregar al carrito</Text>
        </Button>
    )
}
