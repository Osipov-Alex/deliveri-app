import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts } from '../../redux/selectors';
import { axiosProducts } from '../../redux/slice/productSlice';

import ProductCard from './ProductCard';

const ShopShelf = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosProducts())
  }, [dispatch]);

  const products = useSelector(getProducts);
  const { isLoading, error } = useSelector(state => state.products);

  return (
    <div className='magazines-shelf bl'>
      {isLoading && <span style={{ margin: (0, 'auto'), padding: 30 }}>Loading products...</span>}
      {error && <span style={{fontSize: 25, textAlign: 'center', color: 'red', margin: (0, 'auto'), padding: 30 }}>Error: { error }</span>}
      {products.map(product =>
        <ProductCard product={product} key={product._id} />
      )}
    </div>
  )
};

export default ShopShelf
