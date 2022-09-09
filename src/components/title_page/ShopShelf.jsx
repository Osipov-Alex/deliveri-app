import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import axios from '../../utils/axios';


const ShopShelf = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:3000/api/products').then(response => {
      dispatch({ type: 'ADD_PRODUCT_FROM_DB', payload: response.data })
    }).catch(error => {
      console.log(error)
    })
  }, []);
    


  const shop = useSelector(state => state.shop.currentShop)
  const products = useSelector(state => state.product.products.filter(product => {
    return product.shop === shop
  }))  

  return (
    <div className='magazines-shelf bl'>
      { products.map(product =>
          <ProductCard product={product} key={product.productName} />
        )} 
    </div>
  )
}

export default ShopShelf