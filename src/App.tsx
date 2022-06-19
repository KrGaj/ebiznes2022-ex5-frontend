import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage";
import {CartPage} from "./pages/CartPage";
import {ShopContextProvider} from "./context/ShopContext";
import {PaymentPage} from "./pages/PaymentPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShopContextProvider>
          <BrowserRouter>
            <ul>
              <li><Link to={'/login/google'}/>Zaloguj się - Google</li>
              <li><Link to={'/products'}>Produkty</Link></li>
              <li><Link to={'/cart'}>Koszyk</Link></li>
              <li><Link to={'/payments'}>Płatności</Link></li>
            </ul>
            <Routes>
              <Route path="/products" element={<ProductsPage />}/>
              <Route path="/cart" element={<CartPage />}/>
              <Route path="/payment" element={<PaymentPage />}/>
            </Routes>
          </BrowserRouter>
        </ShopContextProvider>
      </header>
    </div>
  );
}

export default App;
