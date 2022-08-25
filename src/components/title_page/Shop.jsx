import React from 'react';
import { useDispatch } from 'react-redux';

const Shop = (props) => {
  const dispatch = useDispatch()
  const chooseShop = (shopName) => {
    dispatch({ type: 'CURRENT_SHOP', payload: shopName })
  }
  return (
    <div className='magazine'> 
      <button onClick={() => chooseShop(props.shop.name) } className='magazine-button'>{props.shop.name}</button>
    </div>
  )
}

export default Shop