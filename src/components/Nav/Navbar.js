import { React, useState } from "react";
import logo from '../../imgs/logo__large_plus.png'
import promo from '../../imgs/nav-promo-lvl6.webp'
import { BrowserRouter as Router, Switch, Link, Route, Routes } from "react-router-dom"
import './nav.css';
import { SearchForm } from "../SearchForm/SearchForm";

export default function Navbar() {

    return (
        <>
            <header className='nav-header'>
                <div className='nav-content'>
                    <nav className='nav-top'>
                        <Link to='/'><img src={logo} alt='logo' height='34px' width='134px' /></Link>
                        <SearchForm />
                        <a href='#'><img src={promo} className='promo-img' alt="promo" height='39px' width='340px' /></a>
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
        </>
    )
}