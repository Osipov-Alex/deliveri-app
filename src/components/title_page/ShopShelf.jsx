import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../utils/axios';

import ProductCard from './ProductCard';

const ShopShelf = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/products').then(response => {
      dispatch({ type: 'ADD_PRODUCT_FROM_DB', payload: response.data });
    }).catch(error => {
      console.log(error);
    })
  }, [dispatch]);

  const shop = useSelector(state => state.shop.currentShop);
  const products = useSelector(state => state.product.products.filter(product => {
    return product.shop === shop
  }));

  return (
    <div className='magazines-shelf bl'>
      {products.map(product =>
        <ProductCard product={product} key={product.productName} />
      )}
    </div>
  )
};

export default ShopShelf;
