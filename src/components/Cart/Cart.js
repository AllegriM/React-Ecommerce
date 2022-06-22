import { Box, Button, Center, Container, Flex, Image, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import theme from '../../theme'
import { useCartContext } from '../Context/cartContext'

export const Cart = () => {
    const { cart } = useCartContext()
    console.log(cart)

    return (
        <Container backgroundColor='#EBEBEB' h='100vh' maxW='100%'>
            <Box mx='auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='4px' flex backgroundColor='#FFFFFF' w='90%' maxW='70rem' minH='370px' padding='2rem' mt='1em'>
                <Tabs ps='2em' pt='4em' w='85%'>
                    <TabList>
                        <Tab fontSize='17px' color={theme.colors.blue} _selected={{ color: 'black', borderBottom: '2px' }} outline='none' cursor='pointer' w='14rem' backgroundColor='transparent'>Carrito ({cart.length})</Tab>
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
                        cart.map((item) => {
                            return (
                                <Box mt='1em' key={item.id}>
                                    <Flex align='end'>
                                        <Image w='50px' h='50px' src={item.thumbnail}/>
                                        <Text ms='.75em' fontSize='1.25rem'>{item.title}</Text>
                                        <span>{item.cantidadElegida}</span>
                                    </Flex>
                                </Box>
                            )
                        })
                }
            </Box>
        </Container>

    )
}
