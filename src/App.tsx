import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage";
import {CartPage} from "./pages/CartPage";
import {ShopContextProvider} from "./context/ShopContext";
import {PaymentPage} from "./pages/PaymentPage";
import {HomePage} from "./pages/HomePage";
import {LoginPage} from "./pages/LoginPage";
import { Container } from "react-bootstrap";
import {NavbarComponent} from "./components/Navbar";
import {LogoutPage} from "./pages/LogoutPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShopContextProvider>
          <Container>
            <NavbarComponent />

            <main>
              <BrowserRouter>
                <Routes>
                  <Route path="login" element={<LoginPage/>} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="products" element={<ProductsPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="payments" element={<PaymentPage />} />
                  <Route path="logout" element={<LogoutPage />} />
                </Routes>
              </BrowserRouter>
            </main>
          </Container>
        </ShopContextProvider>
      </header>
    </div>
  );
}

export default App;
