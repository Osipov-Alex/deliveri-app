import React from 'react';
import CartContent from './CartContetn';
import CartSubmit from './CartSubmit';

const ShopCartContent = () => {
  return (
    <div className='shop-cart-content'>
      <CartContent />
      <CartSubmit />
    </div>
  )
}

export default ShopCartContent