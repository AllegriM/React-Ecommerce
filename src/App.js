import React from 'react';
import Navbar from "./components/Nav/Navbar"
import Home from "./components/Main/cards/Home"
import Product from './components/Product/Product'
import { BrowserRouter as Router, Switch, Link, Route, Routes } from "react-router-dom"
import Main from './components/Main/cards/Home';




export default function App() {
  return (
    <div className="App">
      <div className='contenedor'>
        <Navbar />
        <div className='contenido'>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/Product/:nombre-del-producto' element={<Product />} />
          </Routes>       
        </div>
      </div>
    </div>
  );
}
