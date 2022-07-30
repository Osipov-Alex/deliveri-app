import React from 'react'
import CartInfo from './CartInfo'
import UserInfo from './UserInfo'

const CartContent = () => {
  return (
    <div className='cart-content'>
      <UserInfo />
      <CartInfo />
    </div>
  )
}

export default CartContent