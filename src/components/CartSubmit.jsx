import React from 'react'
import { useSelector } from 'react-redux'

const CartSubmit = () => {
  const totalPrice = useSelector(state => state.totalPrice)
  return (
    <div className='cart-submit'>
      <div className='price'>Total price: <span>{totalPrice}</span></div>
      <button className='submit-button'>Submit</button>
    </div>
  )
}

export default CartSubmit