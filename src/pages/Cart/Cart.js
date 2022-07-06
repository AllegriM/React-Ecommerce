import { Box, Container, Tab, TabList, Tabs } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import theme from '../../theme'
import { useCartContext } from '../../Context/cartContext'
import './cart.css'
import { SearchForm } from "../../components/Nav/SearchForm";
import Navbar from "../../components/Nav/Navbar"
import { CartList } from '../../components/CartList'
import { FavList } from '../../components/FavList'
import { FavContext } from '../../Context/favContext'


export const Cart = () => {

    const { cart } = useCartContext()

    const { favs  } = useContext(FavContext)

    const [displayCart, setDisplayCart] = useState(true)

    return (
        <>
            <Navbar>
                <SearchForm />
            </Navbar>
            <Container backgroundColor='#EBEBEB' h='100vh' maxW='90%'>
                <Box mx='auto' boxShadow='0 1px 2px 0 rgb(0 0 0 / 30%)' borderRadius='4px' flex backgroundColor='#FFFFFF' w='90%' maxW='70rem' minH='370px' padding='2rem' mt='1em'>
                    <Tabs ps='2em' pt='4em' w='85%'>
                        <TabList>
                            <Tab onClick={() => setDisplayCart(true)} fontSize='17px' color={theme.colors.blue} _selected={{ color: 'black', borderBottom: '2px' }} outline='none' cursor='pointer' w='14rem' backgroundColor='transparent'>Carrito ({cart?.length})</Tab>
                            <Tab onClick={() => setDisplayCart(false)} fontSize='17px' color={theme.colors.blue} _selected={{ color: 'black', borderBottom: '2px' }} outline='none' cursor='pointer' w='14rem' backgroundColor='transparent'>Favoritos ({favs?.length})</Tab>
                        </TabList>
                    </Tabs>
                    {
                        displayCart ? 
                        <CartList />
                        :
                        <FavList />
                    }
                    
                </Box>
            </Container>
        </>
    )
}