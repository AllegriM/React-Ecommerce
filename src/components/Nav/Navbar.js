import logo from '../../imgs/logo__large_plus.png'
import promo from '../../imgs/nav-promo-lvl6.webp'
import { Link, useNavigate } from "react-router-dom"
import './nav.css';
import { SearchForm } from "./SearchForm";
import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { useAuth } from '../../Context/authContext';
import { useCartContext } from '../../Context/cartContext';


export default function Navbar() {
    const { user, logOut } = useAuth()

    const {cart} = useCartContext()

    const cartIcon = cart.length === 0 ? "my-cart" : "full-cart"

    const navigate = useNavigate()

    const handleLogOut = async() => {
        await logOut()
        navigate('/')
    }

    return (
        <>
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
                            <span className="ubi-place">Av.Cent 948</span>
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
                            <Link to={`/favorites`} href="#" className="user-data my-favs">Favoritos</Link>
                            <Text my='0' cursor='pointer' href="#" className="user-data my-notis"></Text>
                            <Link to={`/cart`} className={`user-data ${cartIcon}`}>
                                <Text className='cart-items'>{cart.length}</Text>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}