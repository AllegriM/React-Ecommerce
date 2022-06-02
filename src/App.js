import React from 'react';
import Navbar from "./components/Nav/Navbar"
import Main from "./components/Main/cards/Home"
import Product from './components/Product/Product'
import { BrowserRouter as Router, Switch, Link, Route, Routes } from "react-router-dom"

export default function App() {
  return (
      <div className="App">
        <div className='contenedor'>
          <Navbar />
          <div className='contenido'>
            <Routes>
              <Route path='/' element={<Main greeting="Greeting desde APP.js" />} />
              <Route path='/Product' element={<Product />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}
