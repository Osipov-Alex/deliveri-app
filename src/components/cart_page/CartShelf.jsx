import React from 'react';
import { useSelector } from 'react-redux';
import { getProductInCart } from '../../redux/selectors';
import ProductCardInCart from './ProductCardInCart';

const CartShelf = () => {
  
  const productsInCart = useSelector(getProductInCart)
  
  return (
    <div className='cart-info'>
      {productsInCart.map(product =>
        <ProductCardInCart product={product} key={product.id} />
      )}
    </div>
  )
};

export default CartShelf