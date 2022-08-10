import React from 'react';
import { useSelector } from 'react-redux';
import ItemCart from './ItemCart';

const CartInfo = () => {
  const productsInCart = useSelector(state => state.productsInCart)
  return (
    <div className='cart-info'>
      {productsInCart.map(product =>
        <ItemCart product={product} key={product.productName} />
      )}
    </div>
  )
}

export default CartInfo