import { Box, Button, Container, Flex, Image, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import theme from '../../theme'
import { useCartContext } from '../Context/cartContext'

export const Cart = () => {
    const { cart, removeItem } = useCartContext()

    console.log(cart)

    const [quantity, setQuantity] = useState(1)

    const [activeBtn, setActiveBtn] = useState(false)

    const removeItemCart = (e) => {
        let id = e.target.getAttribute('data-id')
        removeItem(id)
    }

    const increaseItem = (e) => {
        // let id = e.target.getAttribute('data-id')
        if (quantity !== 1){
            setActiveBtn(false)
        }
        setQuantity(prevValue => prevValue + 1)
    }

    const decreaseItem = (e) => {
        // let id = e.target.getAttribute('data-id')
        if (quantity === 1) {
            setActiveBtn(true)
        }
        setQuantity(prevValue => prevValue - 1)
    }

    return (
        <Container backgroundColor='#EBEBEB' h='100vh' maxW='100%'>
            <Box mx='auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='4px' flex backgroundColor='#FFFFFF' w='90%' maxW='70rem' minH='370px' padding='2rem' mt='1em'>
                <Tabs ps='2em' pt='4em' w='85%'>
                    <TabList>
                        {/* <Tab fontSize='17px' color={theme.colors.blue} _selected={{ color: 'black', borderBottom: '2px' }} outline='none' cursor='pointer' w='14rem' backgroundColor='transparent'>Carrito ({cart?.length})</Tab> */}
                        <Tab fontSize='17px' color={theme.colors.blue} _selected={{ color: 'black', borderBottom: '2px' }} outline='none' cursor='pointer' w='14rem' backgroundColor='transparent'>Favoritos (0)</Tab>
                    </TabList>
                </Tabs>
                {
                    cart.length === 0 ?
                        <Box mt='5em' textAlign='center'>
                            <Text m='0' fontSize='32px' color='#666' fontWeight='100'>Tu carrito está vacío</Text>
                            <Text m='0' fontSize='18px' color='#999' fontWeight='100'>¿No sabés qué comprar? ¡Miles de productos te esperan!</Text>
                        </Box>
                        :
                        cart.map( (item) => {
                            return (
                                <Box mt='1.5em' key={item.id}>
                                    <Flex align='center' justifyContent='space-around'>
                                        <Flex align='center' justifySelf='self-start'>
                                            <Image w='50px' h='50px' src={item.thumbnail}/>
                                            <Box>
                                                <Text ms='.75em' my='0'  fontSize='1.25rem'>{item.title}</Text>
                                                <Text fontSize='14px' cursor='pointer' color={theme.colors.blue} ms='1em' mb='.5em' onClick={removeItemCart} data-id={item.id}>Eliminar</Text>
                                            </Box>
                                        </Flex>
                                        <Box borderRadius='4px' w='auto' display='flex' border='1px solid #e6e6e6' alignItems='center'>
                                            <Button color={theme.colors.blue} bg='transparent' border='none' onClick={decreaseItem} disabled={activeBtn} data-id={item.id}>-</Button>
                                            <Text w='40px' textAlign='center'>{quantity}</Text>
                                            <Button color={theme.colors.blue} bg='transparent' border='none' onClick={increaseItem} data-id={item.id}>+</Button>
                                        </Box>
                                        <Box>
                                            <Text fontSize='26px'>${((item.price) * quantity).toLocaleString("es", "Ar")}</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            )
                        })
                }   
            </Box>
        </Container>

    )
}
