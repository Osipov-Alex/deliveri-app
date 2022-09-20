import React from 'react';
import { useDispatch } from 'react-redux';

const Shop = ({ shop }) => {

  const { shopName } = shop;

  const dispatch = useDispatch();
  const chooseShop = (shopName) => {
    dispatch({ type: 'CURRENT_SHOP', payload: shopName })
  };

  return (
    <div className='magazine'>
      <button onClick={() => chooseShop(shopName)} className='magazine-button btnh'>{shopName}</button>
    </div>
  )
};

export default Shop