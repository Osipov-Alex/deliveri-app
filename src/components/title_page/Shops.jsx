import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getShops } from '../../redux/selectors.js';
import { axiosShops } from '../../redux/slice/shopsSlice.js';

import Shop from './Shop';

const Shops = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosShops())
  }, [dispatch])
  const { isLoading, error } = useSelector(state => state.shops)
  const shops = useSelector(getShops);
  
  return (
    <div className='magazines'>
      <span className='title-magazine'><strong>Shops:</strong></span>
      {isLoading && <span>Loading shops...</span>}
      {error && <span style={{fontSize: 25, textAlign: 'center', color: 'red'}}>Error: { error }</span>}
      {shops.map(shop =>
        <Shop shop={shop} key={shop._id} />
      )}
    </div>
  )
};

export default Shops