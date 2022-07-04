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
import { LogIn } from "./pages/LogIn/LogIn";
// import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useAuth } from "./Context/authContext";

// "homepage": "https://github.com/AllegriM/React-MELI",


export default function App() {

  const { user, log } = useAuth()

  return (
    <CartContextProvider>
      <AmountContextProvider>
        <FavContextProvider>
          <div className="App">
            {
              user !== null && log ?
                <section className='contenido'>
                  <Navbar>
                    <SearchForm />
                  </Navbar>
                  <Routes>
                    <Route index path='/home' element={<Home />} />
                    <Route path='/products/:prodId' element={<ProductDetailCard />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/search/:keyword' element={<ProductList />} />
                    <Route path='/favorites' element={<Favorites />} />
                  </Routes>
                </section>
                :
                <section className='contenido'>
                  <Routes>
                    <Route exact path='/' element={<LogIn />} />
                    <Route path='*' element={<PageNotFound />} />
                  </Routes>
                </section>
            }
          </div>
        </FavContextProvider>
      </AmountContextProvider>
    </CartContextProvider>
  );
}
