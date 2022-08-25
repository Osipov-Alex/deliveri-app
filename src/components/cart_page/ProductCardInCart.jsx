import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

const ItemCart = (props) => {
  const [items, setItems] = useState(props.product.quantity)
  const dispatch = useDispatch()

  function clickUp(){
    setItems(Number(items) + 1)
    dispatch({type: 'INCREASE_QUANTITY', payload: props.product.id })
  }

  function clickDown() {
    if (items > 0) {
      setItems(Number(items) - 1)
      dispatch({type: 'DECREASE_QUANTITY', payload: props.product.id })
    }
  }

  return (
    <div className='item-cart'>
      <div className='cart-image'>
        <img src={props.product.productImage} alt='' width='379px' height='162px' />
      </div>
      <div className='item-cart-info'>
        <div className='item-info'>
          <div className='item-name'>
            <span>{props.product.productName}</span>
          </div>
          <div className='item-price'>
            <span>Price: </span><span>{props.product.price}</span>
          </div>
        </div>
        <div className='item-count'>
          <input
            type='text'
            readOnly = "readonly"
            value={items}
            onChange={e => setItems(e.target.value)}
            className='item-input'
          />
          <div className='item-btns'>
            <button onClick={clickUp} className='item-button-up'>&#x21E7;</button>
            <button onClick={clickDown} className='item-button-down'>&#x21E9;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCart