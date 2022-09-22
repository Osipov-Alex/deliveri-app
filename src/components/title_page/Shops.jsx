import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../utils/axios.js';
import Shop from './Shop';

const Shops = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/shops').then(response => {
      dispatch({ type: 'ADD_SHOPS', payload: response.data })
    }).catch(error => {
      console.log(error)
    });
  }, [dispatch]);

  const shops = useSelector(state => state.shop.shops);

  return (
    <div className='magazines'>
      <span className='title-magazine'><strong>Shops:</strong></span>
      {shops.map(shop =>
        <Shop shop={shop} key={shop._id} />
      )}
    </div>
  )
};

export default Shops