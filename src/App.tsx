import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Products} from "./pages/Products";
import {CartPage} from "./pages/Cart";
import {ShopContextProvider} from "./context/ShopContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}

        <ShopContextProvider>
          <BrowserRouter>
            <ul>
              <li><Link to={'/products'}>Produkty</Link></li>
              <li><Link to={'/cart'}>Koszyk</Link></li>
            </ul>
            <Routes>
              <Route path="/products" element={<Products />}/>
              <Route path="/cart" element={<CartPage />}/>
            </Routes>
          </BrowserRouter>
        </ShopContextProvider>
      </header>
    </div>
  );
}

export default App;
