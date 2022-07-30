import React from 'react';
import './styles/App.css';
import { Route, Link, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import MagazinesContent from './components/MagazinesContent';
import ShopCartContent from './components/ShopCartContent';

function App() {
  return (
    <div className='App'>  
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route path='shop' element={<MagazinesContent />} />
          <Route path='shoping-cart' element={<ShopCartContent />} />
        </Route>
      </Routes>
    </div> 
  );
}

export default App;
