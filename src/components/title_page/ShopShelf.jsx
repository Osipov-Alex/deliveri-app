import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/selectors';
import { getProductsFromDB } from '../../redux/slice/productSlice';
import axios from '../../utils/axios';

import ProductCard from './ProductCard';

const ShopShelf = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/products').then(response => {
      dispatch(getProductsFromDB(response.data));
    }).catch(error => {
      console.log(error);
    })
  }, [dispatch]);

  const products = useSelector(getProducts);
  
  return (
    <div className='magazines-shelf bl'>
      {products.map(product =>
        <ProductCard product={product} key={product._id} />
      )}
    </div>
  )
};

export default ShopShelf;
