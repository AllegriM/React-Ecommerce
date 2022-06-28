// React utilities
import { Route, Routes } from "react-router-dom"
import { useState } from "react";

// React Components
import { SearchForm } from "./components/SearchForm/SearchForm";
import Navbar from "./components/Nav/Navbar"
import Home from "./pages/Home"
import ProductDetailCard from './components/ListProductDetailCard/ListProductDetailCard'
import ProductList from './components/ProductListContainer/ProductList';
import { Cart } from "./components/Cart/Cart";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { CartContextProvider } from "./Context/cartContext";
import { AmountContextProvider } from "./Context/amountSelContext";

export default function App() {

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

    <CartContextProvider>
      <AmountContextProvider>
        <div className="App">
          <Navbar>
            <SearchForm />
          </Navbar>
          <section className='contenido'>
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path='/' element={<Home handleSuma={sumar} handleResta={restar} stock={stock} count={count} />} />
              <Route path='/products/:prodId' element={<ProductDetailCard />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search/:keyword" element={<ProductList />} />
            </Routes>

          </section>
        </div>
      </AmountContextProvider>
    </CartContextProvider>
  );
}
