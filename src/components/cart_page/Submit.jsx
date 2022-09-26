import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slice/cartSlice';
import { clearUserInformation } from '../../redux/slice/userSlice';
import axios from '../../utils/axios';

const CartSubmit = () => {
  
  const dispatch = useDispatch();

  const productsInCart = useSelector(state => state.cart.productsInCart);
  const {  name, address, email, phoneNumber  } = useSelector(state => state.user);

  const totalPrice = productsInCart.reduce((acc, curr) => {
    return acc + (curr.quantity * curr.price);
  }, 0);

  const submit = () => {

    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      totalPrice: totalPrice,
      products: [...productsInCart],
    };

    axios.post('/order', data)
    .catch(error => {
      console.log(error);
    });

    dispatch(clearUserInformation());
    dispatch(clearCart())
  };

  return (
    <div className='cart-submit'>
      <div className='price'>Total price: <span>{totalPrice}</span></div>
      <button className='submit-button btnh' onClick={submit}>Submit</button>
    </div>
  )
}

export default CartSubmit;
