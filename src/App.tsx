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
import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShopContextProvider>
          <Container>
            <Navbar bg="light" expand="lg" className="fixed-top">
              <Nav className='w-100'>
                <Container>
                  <Navbar.Brand href={"/"}>Sklep</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href={"login"}>Zaloguj się</Nav.Link>
                      <Nav.Link href={"products"}>Produkty</Nav.Link>
                      <Nav.Link href={"cart"}>Koszyk</Nav.Link>
                      <Nav.Link href={"payments"}>Płatności</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Nav>
            </Navbar>

            <main>
              <BrowserRouter>
                <Routes>
                  <Route path="login" element={<LoginPage/>} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="products" element={<ProductsPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="payment" element={<PaymentPage />} />
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
