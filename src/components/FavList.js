import { Box, Text, Flex, Image } from '@chakra-ui/react'
import { useContext } from "react"
import { FavContext } from "../Context/favContext"
import theme from '../theme'

export const FavList = ( ) => {

    const { favs, removeFav } = useContext(FavContext)
    
    // passing item id to removeFav function from FavContext
    const removeFavItemList = (e) =>{
        const itemId = e.target.getAttribute("data-id")
        removeFav(itemId)
    }

    return (
        <>
            {
                favs.length === 0 ?
                    <Box mt='5em' textAlign='center'>
                        <Text m='0' fontSize='32px' color='#666' fontWeight='100'>Tus favoritos está vacío</Text>
                        <Text m='0' fontSize='18px' color='#999' fontWeight='100'>¿No sabés qué agregar? ¡Miles de productos te esperan!</Text>
                    </Box>
                    :
                    <Box>
                        {favs.map( item => {
                            return (
                                <Box mt='1.5em' key={item.id} borderBottom='1px solid #e6e6e6'>
                                    <Flex alignItems='center' gap='30px' pr='5rem'>
                                        <Flex className='cart-title' align='center' w='730px'>
                                            <Image w='60px' h='70px' src={item.thumbnail} />
                                            <Box>
                                                <Text ms='.75em' my='0' fontSize='1.25rem'>{item.title}</Text>
                                                <Text fontSize='14px' cursor='pointer' color={theme.colors.blue} ms='1em' mb='.5em' onClick={removeFavItemList} data-id={item.id}>Eliminar</Text>
                                            </Box>
                                        </Flex>
                                        <Box className='cart-price' w='120px'>
                                            <Text textAlign='center' fontSize='26px'>${item.price.toLocaleString("es", "Ar")}</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            )
                        })
                        }
                    </Box>
            }
        </>
    )
}
