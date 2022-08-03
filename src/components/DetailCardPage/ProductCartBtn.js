import { Button, Text } from "@chakra-ui/react"

export const AddCartButton = ({ addToCart, item }) => {

    return (
        <Button type="submit" className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' onClick={() => addToCart(item)}>
            <Text>Agregar al carrito</Text>
        </Button>
    )
}