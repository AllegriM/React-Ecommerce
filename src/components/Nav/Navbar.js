import logo from '../../imgs/logo__large_plus.png'
import promo from '../../imgs/nav-promo-lvl6.webp'
import { Link, useNavigate } from "react-router-dom"
import './nav.css';
import { SearchForm } from "./SearchForm";
import { Box, Img, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { useAuth } from '../../Context/authContext';
import { useCartContext } from '../../Context/cartContext';
import theme from '../../theme';
import { useContext } from 'react';
import { FavContext } from '../../Context/favContext';


export default function Navbar() {
    const { user, logOut } = useAuth()

    const { cart } = useCartContext()

    const { favs, removeFav } = useContext(FavContext)

    let totalCartItems = 0
    cart?.forEach(item => totalCartItems += item.cantidadElegida)

    const cartIcon = cart.length === 0 ? "my-cart" : "full-cart"

    const navigate = useNavigate()

    const handleLogOut = async () => {
        await logOut()
        navigate('/')
    }

    const deleteFav = (e) => {
        let itemId = e.target.getAttribute('data-id', '')
        removeFav(itemId)
    }

    return (
        
        user && user.displayName ?
        <header className='nav-header'>
            <div className='nav-content'>
                <nav className='nav-top'>
                    <Link to='/home'><img src={logo} alt='logo' height='34px' width='134px' /></Link>
                    <SearchForm />
                    <Text my='0' cursor='pointer' href='#'><img src={promo} className='promo-img' alt="promo" height='39px' width='340px' /></Text>
                </nav>
                <div className='nav-bot'>
                    <div className="nav-ubi">
                        <Text my='0' cursor='pointer' href="#" className="ubi-logo"></Text>
                        <span className="ubi-user">Enviar a {user?.displayName}</span>
                        <span className="ubi-place">Av.Casero 14</span>
                    </div>
                    <div className="nav-categories">
                        <ul className='nav-items'>
                            <li className='nav-item nav-item-cat'>Categorias</li>
                            <li className='nav-item'>Ofertas</li>
                            <li className='nav-item'>Historial</li>
                            <li className='nav-item'>Supermercado</li>
                            <li className='nav-item'>Moda</li>
                            <li className='nav-item'>Vender</li>
                            <li className='nav-item'>Ayuda</li>
                        </ul>
                    </div>
                    <div className="nav-user">
                        <Menu my='0' cursor='pointer' href="#">
                            <MenuButton cursor='pointer' border='none' bg='none' className="user-data my-user">{user?.displayName}</MenuButton>
                            <MenuList>
                                <MenuGroup>
                                    <MenuItem cursor='pointer' border='none' bg='none'>Compras</MenuItem>
                                    <MenuItem cursor='pointer' border='none' bg='none'>Preguntas</MenuItem>
                                </MenuGroup>
                                <MenuDivider />
                                <MenuItem onClick={handleLogOut} cursor='pointer' border='none' bg='none'>Salir</MenuItem>
                            </MenuList>
                        </Menu>
                        <Text my='0' cursor='pointer' href="#" className="user-data my-buys">Mis compras</Text>
                        <Menu>
                            <MenuButton cursor='pointer' border='none' bg='none' className="user-data my-favs">Favoritos</MenuButton>
                            <MenuList >
                                <MenuGroup title='Favoritos' my='0'>
                                    <MenuDivider />
                                    {
                                        favs.length !== 0 ?
                                            favs.map(favItem => {
                                                return (
                                                    <MenuItem key={favItem.id} cursor='pointer' border='none' bg='none' w='450px' _hover={{ bg: 'transparent' }}>
                                                        <Img src={favItem.thumbnail} w='55px' h='55px' p='15px' flexShrink='0' />
                                                        <Box>
                                                            <Text m='0' fontSize='14px' color='rgba(0, 0, 0, 0.9)' >{favItem.title}</Text>
                                                            <Text ml='0.5em' my='.5em' fontSize='26px' color='rgba(0, 0, 0, 0.9)'>${favItem.price.toLocaleString('es-AR')}</Text>
                                                            <Text fontWeight='100' type='button' border='none' bg='transparent' _hover={{ bg: 'transparent' }} zIndex='10' color={theme.colors.blue} onClick={deleteFav} fontSize='14px' cursor='pointer' mb='.5em' data-id={favItem.id} >Eliminar</Text>
                                                        </Box>
                                                        <MenuDivider />
                                                    </MenuItem>
                                                )
                                            })
                                            :
                                            <>
                                                <MenuItem cursor='pointer' border='none' bg='#EBEBEB' w='350px' h='150px' padding='50px' _hover={{ bg: '#EBEBEB' }}>
                                                    <Text fontSize='12px' textAlign='center'>
                                                        Agregá acá los productos que te gustaron para poder verlos más tarde.
                                                    </Text>
                                                </MenuItem>
                                            </>
                                    }
                                    {
                                        favs.length !== 0 ?
                                            <MenuItem cursor='pointer' border='none' bg='none' justifyContent='center' _hover={{ bg: 'transparent' }} >
                                                <Link to='/favorites' color={theme.colors.blue} >
                                                    Ver todos los favoritos
                                                </Link>
                                            </MenuItem>
                                            :
                                            null
                                    }
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                        {/* <Link to={`/favorites`} href="#" className="user-data my-favs">Favoritos</Link> */}
                        <Text my='0' cursor='pointer' href="#" className="user-data my-notis"></Text>
                        <Link to={`/cart`} className={`user-data ${cartIcon}`}>
                            <Text className='cart-items'>{totalCartItems}</Text>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        :
        <Text>Loading...</Text>
    )
}