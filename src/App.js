import Navbar from "./components/Nav/Navbar"
import Home from "./components/Main/Home"
import Product from './components/Product/Product'
import { BrowserRouter as Router, Switch, Link, Route, Routes } from "react-router-dom"
import { ProductList } from './components/ProductsQ/ProductList';
import searchProduct from "./components/Nav/getInfo";

export default function App() {
  return (
      <div className="App">
          <Navbar />
          <div className='contenido'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Product' element={<Product />} />
            </Routes>
            <ProductList entry={searchProduct} />
          </div>
      </div>
  );
}
