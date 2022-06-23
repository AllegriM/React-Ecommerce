import { Button, Text } from "@chakra-ui/react"

export const CartButton = ( {addToCart, cart, item, prodAmount} ) => {
    // console.log(cart.some((item)=> item.id === id))

    const addItem = () =>{
        if (item.prodAmount === []) {
            addToCart([...cart, {...item, cantidadElegida: [1]}])
        }
        if (cart.some( (itemInCart)=>itemInCart.id === item.id) ) {
            alert("Ya esta en el carrito")
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
