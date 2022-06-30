import { Text, Box, Flex, Container, Button, Image, Checkbox } from '@chakra-ui/react'
import { useEffect, useState } from 'react'


export const Favorites = () => {

    const [FavItems, setFavItems] = useState([])


    return (
        <Container backgroundColor='#EBEBEB' h='100vh' maxW='90%'>
            <Box mx='auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='1px' flex backgroundColor='#FFFFFF' w='90%' maxW='70rem' mt='8em'>
                <Flex justify='space-between' padding='0.75rem 1rem' alignItems='center'>
                    <Flex gap='1em'>
                        <Checkbox size='sm'></Checkbox>
                        <Text my='0' color='rgba(0,0,0,.25)' fontSize='14px'>Eliminar favoritos seleccionados</Text>
                    </Flex>
                    <Box>
                        <Text my='0' color='rgba(0,0,0,.9)' fontSize='14px'>Favoritos 0 - 0 de 0</Text>
                    </Box>
                </Flex>
                <Box borderTop='1px solid rgba(0,0,0,.1)' borderBottom='1px solid rgba(0,0,0,.1)'>
                    {
                        FavItems.length === 0 ?
                            <Box mt='5em' textAlign='center'>
                                <Text m='0' fontSize='32px' color='#666' fontWeight='100'>Tu carrito está vacío</Text>
                                <Text m='0' fontSize='18px' color='#999' fontWeight='100'>¿No sabés qué comprar? ¡Miles de productos te esperan!</Text>
                            </Box>
                            :
                            FavItems.map(() => {
                                return (
                                    <Box mt='1.5em'>
                                        <Flex align='center'>
                                            <Flex className='cart-title' align='center' justifySelf='flex-start' w='730px'>
                                                <Image w='50px' h='50px' />
                                                <Box>
                                                    <Text ms='.75em' my='0' fontSize='1.25rem'></Text>
                                                    <Text fontSize='14px' cursor='pointer' ms='1em' mb='.5em' >Eliminar</Text>
                                                </Box>
                                            </Flex>
                                            <Box className='cart-quantity' borderRadius='4px' w='auto' display='flex' border='1px solid #e6e6e6' alignItems='center'>
                                                <Button bg='transparent' border='none' >-</Button>
                                                <Text w='40px' textAlign='center'></Text>
                                                <Button bg='transparent' border='none'>+</Button>
                                            </Box>
                                            <Box className='cart-price' w='120px'>
                                                <Text fontSize='26px'>$</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                )
                            })
                    }
                </Box>
                <Flex justify='space-between' padding='0.75rem 1rem' alignItems='center'>
                    <Flex gap='1em'>
                        <Checkbox size='sm'></Checkbox>
                        <Text my='0' color='rgba(0,0,0,.25)' fontSize='14px'>Eliminar favoritos seleccionados</Text>
                    </Flex>
                    <Box>
                        <Text my='0' color='rgba(0,0,0,.9)' fontSize='14px'>Favoritos 0 - 0 de 0</Text>
                    </Box>
                </Flex>
            </Box>
        </Container>
    )
}