import { Text, Box, Flex, Container, Button, Image, Checkbox, Img } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import { FavContext } from '../../Context/favContext'
import noFavs from '../../imgs/noFavs.png'
import theme from '../../theme'


export const Favorites = () => {

    const { favs, removeFav } = useContext(FavContext)
    // const [selected, setSelected] = useState(false);

    const [checkedItems, setCheckedItems] = useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    console.log(checkedItems)

    const removeFromFav = (e) => {
        let itemId = e.target.getAttribute('data-id', '')
        removeFav(itemId)
    }

    // const selectOption = () =>{
    //     if (selected === false) {
    //         setSelected(true);
    //     }else{
    //         setSelected(false)
    //     }
    // }

    return (
        <Container backgroundColor='#EBEBEB' h='100vh' maxW='90%'>
            <Text mx='3em' fontSize='24px' fontWeight='600' w='90%' maxW='70rem'>Favoritos</Text>
            <Box mx='auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='1px' flex backgroundColor='#FFFFFF' w='90%' maxW='70rem' mt='2em'>
                {
                    favs.length === 0 ?
                        <>
                            <Flex justify='space-between' padding='0.75rem 1rem' alignItems='center'>
                                <Flex gap='1em' alignItems='center'>
                                    <Checkbox
                                        borderRadius=".125rem"
                                        h='16px'
                                        checked={allChecked}
                                        isIndeterminate={isIndeterminate}
                                        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                                        size='sm'
                                    />
                                    <Text my='0' color='rgba(0,0,0,.25)' fontSize='14px'>Eliminar favoritos seleccionados</Text>
                                </Flex>
                                <Box>
                                    <Text my='0' color='rgba(0,0,0,.9)' fontSize='14px'>Favoritos {favs.length === 0 ? 0 : 1} - {favs.length !== 0 ? favs.length : 0} de {favs.length !== 0 ? favs.length : 0}</Text>
                                </Box>
                            </Flex>
                            <Box borderTop='1px solid rgba(0,0,0,.1)' borderBottom='1px solid rgba(0,0,0,.1)' h='510px' bg='#e5e5e5' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                                <Img src={noFavs}/>
                                <Text m='.2em 0' fontSize='16px' color='rgba(0,0,0,.9)'>Nada por acá...</Text>
                                <Text m='.2em 0' color='rgba(0,0,0,.55)' fontSize='14px' fontWeight='400'>Aún no tenés productos en Favoritos</Text>
                            </Box>
                        </>
                        :
                        <>
                            <Flex justify='space-between' padding='0.75rem 1rem' alignItems='center'>
                                <Flex gap='1em' alignItems='center'>
                                    <Checkbox
                                        borderRadius=".125rem"
                                        h='16px'
                                        checked={allChecked}
                                        isIndeterminate={isIndeterminate}
                                        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                                        size='sm'
                                    />
                                    <Text my='0' color='rgba(0,0,0,.25)' fontSize='14px'>Eliminar favoritos seleccionados</Text>
                                </Flex>
                                <Box>
                                    <Text my='0' color='rgba(0,0,0,.9)' fontSize='14px'>Favoritos {favs.length === 0 ? 0 : 1} - {favs.length !== 0 ? favs.length : 0} de {favs.length !== 0 ? favs.length : 0}</Text>
                                </Box>
                            </Flex>
                            <Box borderTop='1px solid rgba(0,0,0,.1)' borderBottom='1px solid rgba(0,0,0,.1)'>
                                {
                                    favs.length === 0 ?
                                        <Box mt='5em' textAlign='center'>
                                            <Text m='0' fontSize='32px' color='#666' fontWeight='100'>Tu carrito está vacío</Text>
                                            <Text m='0' fontSize='18px' color='#999' fontWeight='100'>¿No sabés qué comprar? ¡Miles de productos te esperan!</Text>
                                        </Box>
                                        :
                                        favs.map((item, index) => {
                                            return (
                                                <Link to={`/products/${item.id}`} key={item.id}>
                                                    <Flex mt='1.5em' px='1rem' alignItems='center'>
                                                        <Checkbox
                                                            size='sm'
                                                            borderRadius=".125rem"
                                                            h='16px'
                                                            checked={checkedItems[index]}
                                                            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[index]])}
                                                        />
                                                        <Flex alignItems='center'>
                                                            <Flex className='cart-title' alignItems='center' justifySelf='flex-start' w='730px'>
                                                                <Image p='24px' w='160px' h='160px' src={item.thumbnail} />
                                                                <Box>
                                                                    <Text ms='.75em' my='0' fontSize='20px' color='rgba(0, 0, 0, 0.9)' >{item.title}</Text>
                                                                    <Text ml='0.5em' my='.5em' fontSize='26px' color='rgba(0, 0, 0, 0.9)'>${item.price.toLocaleString('es-AR')}</Text>
                                                                    <Button fontWeight='100' type='button' border='none' bg='transparent' _hover={{ bg: 'transparent' }} zIndex='10' color={theme.colors.blue} onClick={removeFromFav} fontSize='14px' cursor='pointer' mb='.5em' data-id={item.id} >Eliminar</Button>
                                                                </Box>
                                                            </Flex>
                                                        </Flex>
                                                    </Flex>
                                                </Link>
                                            )
                                        })
                                }
                            </Box>
                            <Flex justify='space-between' padding='0.75rem 1rem' alignItems='center'>
                                <Flex gap='1em' alignItems='center'>
                                    <Checkbox
                                        borderRadius=".125rem"
                                        h='16px'
                                        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                                        checked={allChecked}
                                        isIndeterminate={isIndeterminate}
                                        size='sm'
                                    />
                                    <Text my='0' color='rgba(0,0,0,.25)' fontSize='14px'>Eliminar favoritos seleccionados</Text>
                                </Flex>
                                <Box>
                                    <Text my='0' color='rgba(0,0,0,.9)' fontSize='14px'>Favoritos {favs.length === 0 ? 0 : 1} - {favs.length !== 0 ? favs.length : 0} de {favs.length !== 0 ? favs.length : 0}</Text>
                                </Box>
                            </Flex>
                        </>
                }
            </Box>
        </Container>
    )
}