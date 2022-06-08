import Navbar from "./components/Nav/Navbar"
import Home from "./components/Main/Home"
import Product from './components/Product/Product'
import { Router, Switch, Link, Route, Routes } from "react-router-dom"
import { ProductList } from './components/ProductsQ/ProductList';
import { useState } from "react";


export default function App() {
  // NavBar search
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e, ) => {
    e.preventDefault()
    setKeyword(keyword)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  //CONTADOR
  const [count, setCount] = useState(0);
  const stock = 5;
  const sumar = () => {
    return count === stock ? alert("No hay mas stock") : setCount(prevCount => prevCount + 1)
  }
  const restar = () => {
    return count === 0 ? alert("Carrito vacio") : setCount(prevCount => prevCount - 1)
  }
  return (
    <div className="App">
      <Navbar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        keyword={keyword}
      />
      <div className='contenido'>
        <Routes>
          <Route 
            path='/' 
            element={
              <Home
              handleSuma = {sumar}
              handleResta = {restar}
              stock = {stock}
              count = {count}
              />} 
          />
          <Route path='/Product' element={<Product />} />
        </Routes>
        <ProductList
          keyword={keyword}
        />
      </div>
    </div>
  );
}
