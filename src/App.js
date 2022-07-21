// React utilities
import { Route, Routes } from "react-router-dom"
// React Components
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
import { PurchaseOrder } from "./pages/Purchase/PurchaseOrder";
import { RegisterForm } from "./components/RegisterForm";
import PrivateRoutes from "./components/ProtectedRoutes";
import ForgotPassword from "./components/ForgotPassword";
import Category from "./pages/Categories/Category";

export default function App() {

  return (
    <CartContextProvider>
      <AmountContextProvider>
        <FavContextProvider>
          <div className="App">
            <section className='contenido'>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path='/home' element={<Home />} exact />
                  <Route path='/products/:prodId' element={<ProductDetailCard />} />
                  <Route path='/tecnologia' element={<Category category='tecnologia' title='Tecnologia' />} exact/>
                  <Route path='/mueble' element={<Category category='mueble' title='Muebles' />} exact/>
                  <Route path='/deportes' element={<Category category='deporte' title='Deportes' />} exact/>
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/search/:keyword' element={<ProductList />} />
                  <Route path='/favorites' element={<Favorites />} />
                  <Route path='/order-purchased' element={<PurchaseOrder />} />
                  <Route path='*' element={<PageNotFound />} /> 
                </Route>
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/register' element={<RegisterForm />} />
                <Route index path='/' element={<LogIn />} />
              </Routes>
            </section>
          </div>
        </FavContextProvider>
      </AmountContextProvider>
    </CartContextProvider>
  );
}
