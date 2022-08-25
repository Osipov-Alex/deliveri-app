import React from 'react'
import { useSelector } from 'react-redux'

const CartSubmit = () => {
  const productsInCart = useSelector(state => state.cart.productsInCart)
  let totalPrice = 0
  productsInCart.map(product => {
    return totalPrice += product.price * product.quantity
  })
  return (
    <div className='cart-submit'>
      <div className='price'>Total price: <span>{totalPrice}</span></div>
      <button className='submit-button'>Submit</button>
    </div>
  )
}

export default CartSubmit