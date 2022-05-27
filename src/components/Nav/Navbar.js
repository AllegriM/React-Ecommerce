import React from "react";
import logo from '../../imgs/logo__large_plus.png'
import promo from '../../imgs/nav-promo-lvl6.webp'
import { BeakerIcon } from '@heroicons/react/solid'
import { BrowserRouter as Router, Switch, Link, Route, Routes } from "react-router-dom"
import './nav.css';

export default function Navbar() {

    // Obtener valor de input
    function searchProduct() {
        let searchBar = document.querySelector('.search-bar');
        // let searchBtn = document.querySelector('.search-icon');
        searchBar.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                console.log(`Usted esta buscando: ${searchBar.value}`)
                fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchBar.value}`)
                    .then( (resp) => console.log(resp.json()))
                    .then( (data) => console.log(data))
                    .catch( (error) => error)
                console.log("hola")
            }
        })
    }

    // function searchProduct() {
    //     searchBar.addEventListener('keyup', (e) => {
    //         e.keyCode === 13 ? console.log(searchBar.value) : console.log("nada");
    //     })
    // }


    return (
        <div>
            <header className='nav-header'>
                <div className='nav-content'>
                    <nav className='nav-top'>
                        <Link to='/Home'><img src={logo} alt='logo' height='34px' width='134px' /></Link>
                        <div className='nav-search'>
                            <input onClick={searchProduct} className='search-bar' type='text' placeholder='Buscar productos, marcas y mas...' />
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
                            <a href="#" className="user-data my-user">Marco</a>
                            <a href="#" className="user-data my-buys">Mis compras</a>
                            <a href="#" className="user-data my-favs">Favoritos</a>
                            <a href="#" className="user-data my-notis"></a>
                            <a href="#" className="user-data my-cart"></a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}