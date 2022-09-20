import React from 'react';
import CartShelf from './CartShelf';
import UserInfo from './UserInfo';

const CartContent = () => {
  return (
    <div className='cart-content'>
      <UserInfo />
      <CartShelf />
    </div>
  )
};

export default CartContent