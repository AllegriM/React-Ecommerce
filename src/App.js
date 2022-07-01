// React utilities
import { Route, Routes } from "react-router-dom"
// React Components
import { SearchForm } from "./components/Nav/SearchForm";
import Navbar from "./components/Nav/Navbar"
import Home from "./pages/Home/Home"
import ProductDetailCard from './components/ListProductDetailCard/ListProductDetailCard'
import ProductList from './pages/ProductList/ProductList';
import { Cart } from "./pages/Cart/Cart";
import { PageNotFound } from "./pages/Error/PageNotFound";
import { CartContextProvider } from "./Context/cartContext";
import { AmountContextProvider } from "./Context/amountSelContext";
import { Favorites } from "./pages/Favorites/Favorites";
import { FavContextProvider } from "./Context/favContext";

// "homepage": "https://github.com/AllegriM/React-MELI",


export default function App() {

  return (
    <CartContextProvider>
      <AmountContextProvider>
        <FavContextProvider>
          <div className="App">
            <Navbar>
              <SearchForm />
            </Navbar>
            
            <section className='contenido'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='/products/:prodId' element={<ProductDetailCard />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/search/:keyword' element={<ProductList />} />
                <Route path='/favorites' element={<Favorites />} />
              </Routes>

            </section>
          </div>
        </FavContextProvider>
      </AmountContextProvider>
    </CartContextProvider>
  );
}
