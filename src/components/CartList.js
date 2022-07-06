import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/authContext'
import { useCartContext } from '../Context/cartContext'
import { sendOrder } from '../helpers/createFbOrder'
import theme from '../theme'



export const CartList = () => {

    const { cart, removeItem, setCart, setOrderId } = useCartContext()

    const [loader, setLoader] = useState(false)

    const navigate = useNavigate()
    
    const { user } = useAuth()
    
    // Cart Total price
    let total = 0
    cart.forEach((item) => (total += Math.round((item.cantidadElegida * item.price))))

    // Red message when quantity is the max
    const noStock = <Text as="span" m='0' fontSize='14px' color='#ff5a5f' fontWeight='300'>Cantidad maxima</Text>

    const removeItemCart = (e) => {
        let id = e.target.getAttribute('data-id')
        removeItem(id)
    }

    const increaseItem = (e) => {
        let id = e.target.getAttribute('data-id')
        let itemSelected = cart.find(item => item.id === id)
        const isInCart = cart.some(prod => prod.id === id)
        if (isInCart) {
            const cart_products = cart.filter(prod => prod !== itemSelected)
            if (itemSelected.cantidadElegida === itemSelected.available_quantity) {
                return
            } else {
                setCart([...cart_products, { ...itemSelected, cantidadElegida: itemSelected.cantidadElegida + 1 }])
            }
        }
    }

    const decreaseItem = (e) => {
        let id = e.target.getAttribute('data-id')
        let itemSelected = cart.find((item) => item.id === id)
        if (itemSelected.cantidadElegida === 1) {
            return
        }
        const isInCart = cart.some((prod) => prod.id === id)
        if (isInCart) {
            const cart_products = cart.filter(prod => prod !== itemSelected)
            setCart([...cart_products, { ...itemSelected, cantidadElegida: itemSelected.cantidadElegida - 1 }])
        }
    }
    

    const buyCartItems = async () => {
        await setLoader(true)
        await sendOrder(cart, user)
            .then(resp => setOrderId(resp.id))
        setTimeout(() => {
            setCart([])
            setLoader(false)
        }, 1500)
        navigate('/order-purchased')
    }

    return (
        <>
            {
                cart.length === 0 ?
                    <Box mt='5em' textAlign='center'>
                        <Text m='0' fontSize='32px' color='#666' fontWeight='100'>Tu carrito está vacío</Text>
                        <Text m='0' fontSize='18px' color='#999' fontWeight='100'>¿No sabés qué comprar? ¡Miles de productos te esperan!</Text>
                    </Box>
                    :
                    <Box>
                        {cart.map(item => {
                            return (
                                <Box mt='1.5em' key={item.id}>
                                    <Flex align='center' gap='30px'>
                                        <Flex className='cart-title' align='center' justifySelf='flex-start' w='730px'>
                                            <Image w='50px' h='50px' src={item.thumbnail} />
                                            <Box>
                                                <Text ms='.75em' my='0' fontSize='1.25rem'>{item.title}</Text>
                                                <Text fontSize='14px' cursor='pointer' color={theme.colors.blue} ms='1em' mb='.5em' onClick={removeItemCart} data-id={item.id}>Eliminar</Text>
                                            </Box>
                                        </Flex>
                                        <Box display='flex' flexDirection='column' w='auto' alignItems='flex-end'>
                                            <Box className='cart-quantity' borderRadius='4px' border='1px solid #e6e6e6' display='flex' alignItems='center' justifyContent='center'>
                                                <Button color={theme.colors.blue} bg='transparent' border='none' onClick={decreaseItem} data-id={item.id}>-</Button>
                                                <Text w='40px' textAlign='center'>{item.cantidadElegida}</Text>
                                                <Button color={theme.colors.blue} bg='transparent' border='none' onClick={increaseItem} data-id={item.id}>+</Button>
                                            </Box>
                                            <Text textAlign='center' m='0' fontSize='14px' color='#999'>{item.available_quantity !== item.cantidadElegida ? `${item.available_quantity} disponibles` : noStock}</Text>
                                        </Box>
                                        <Box className='cart-price' w='120px'>
                                            <Text textAlign='center' fontSize='26px'>${Math.round((item.price) * item.cantidadElegida).toLocaleString("es", "Ar")}</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            )
                        })
                        }
                        <Flex justifyContent='end' flexDirection='column' alignItems='end' borderTop='1px solid #e6e6e6' borderBottom='1px solid #e6e6e6'>
                            <Box display='flex' alignItems='center'>
                                <Text fontSize='26px'>Total</Text>
                                <Text fontSize='28px' ml='2em'>${total.toLocaleString("es", "AR")}</Text>
                            </Box>
                            <Button
                                isLoading={loader}
                                marginBottom='26px'
                                cursor='pointer'
                                w='200px'
                                h='48px'
                                border='none' bg={theme.colors.blue}
                                color='white'
                                fontWeight='100'
                                _hover={{ bg: 'rgba(52,131,250,.8)' }}
                                onClick={buyCartItems}
                            >
                                Comprar
                            </Button>
                        </Flex>
                    </Box>
            }
        </>
    )
}


