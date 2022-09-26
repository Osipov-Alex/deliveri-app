import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/slice/cartSlice';

const ItemCart = ({ product }) => {

  const { productName, price, image, id, quantity } = product;

  const dispatch = useDispatch();

  function clickUp() {
    dispatch(increaseQuantity(id));
  };

  function clickDown() {
    if (quantity > 0) {
      dispatch(decreaseQuantity(id));
    }
  };

  function removeItemFromCart() {
    dispatch(removeFromCart(id));
  };

  // const image = `data:image/png;base64,${props.product.image}`

  return (
    <div className='item-cart'>
      <div className=''>
        <img className='cart-image' src={`data:image/png;base64,${image}`} alt='' width='400px' height='180px' />
      </div>
      <div className='item-cart-info'>
        <div className='item-info'>
          <div className='item-name'>
            <span>{productName}</span>
          </div>
          <div className='item-price'>
            <span>Price: </span><span>{price}</span>
          </div>
        </div>
        <div className='item-count'>
          <input
            type='text'
            readOnly="readonly"
            value={quantity}
            className='item-input'
          />
          <div className='item-btns'>
            <button onClick={clickUp} className='item-button-up'>&#x21E7;</button>
            <button onClick={clickDown} className='item-button-down'>&#x21E9;</button>
          </div>
        </div>
        <div>
          <button className='item-btn-remove btnh' onClick={removeItemFromCart}>REMOVE</button>
        </div>
      </div>
    </div>
  )
};

export default ItemCart