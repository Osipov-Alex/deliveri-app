import React from 'react';
import { useSelector } from 'react-redux';
import ProductCardInCart from './ProductCardInCart';

const CartShelf = () => {
  
  const productsInCart = useSelector(state => state.cart.productsInCart)
  
  return (
    <div className='cart-info'>
      {productsInCart.map(product =>
        <ProductCardInCart product={product} key={product.id} />
      )}
    </div>
  )
};

export default CartShelf