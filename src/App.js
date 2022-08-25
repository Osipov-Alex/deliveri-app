import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/title_page/Navigation';
import TitlePage from './components/title_page/TitlePage';
import CartPage from './components/cart_page/CartPage';

function App() {
  return (
    <div className='App'>  
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route path='/' element={<TitlePage />} />
          <Route path='shoping-cart' element={<CartPage />} />
        </Route>
      </Routes>
    </div> 
  );
}

export default App;
