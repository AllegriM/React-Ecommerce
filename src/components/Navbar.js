import React from "react";
import logo from '../imgs/logo__large_plus.png'
import promo from '../imgs/nav-promo-lvl6.webp'
import { BeakerIcon } from '@heroicons/react/solid'

export default function Navbar() {
    return (
        <div>
            <header className='nav-header'>
                <div className='nav-content'>
                    <nav className='nav-top'>
                        <a href='#'><img src={logo} alt='logo' height='34px' width='134px' /></a>
                        <div className='nav-search'>
                            <input className='search-bar' type='text' placeholder='Buscar productos, marcas y mas...' />
                            <button className='search-icon'>
                                <div role='img' aria-label='buscar' className='loop-icon'></div>
                            </button>
                        </div>
                        <a href='#'><img src={promo} alt="promo" height='39px' width='340px' /></a>
                    </nav>
                    <div className='nav-bot'>
                        <div className="nav-ubi">
                            <a href="#" className="ubi-logo"></a>
                            <span className="ubi-user">Enviar a Marco</span>
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

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}