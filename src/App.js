// React utilities
import { Route, Routes } from "react-router-dom"
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

  return (
    <CartContextProvider>
      <AmountContextProvider>
        <div className="App">
          <Navbar>
            <SearchForm />
          </Navbar>
          <section className='contenido'>
            <Routes>
              <Route path='*' element={<PageNotFound />} />
              <Route path='/' element={<Home />} />
              <Route path='/products/:prodId' element={<ProductDetailCard />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/search/:keyword' element={<ProductList />} />
            </Routes>

          </section>
        </div>
      </AmountContextProvider>
    </CartContextProvider>
  );
}
