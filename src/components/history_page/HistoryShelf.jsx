import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosHistory } from '../../redux/slice/historySlice.js';
import { getOrderHistory } from '../../redux/selectors.js';

import HistoryOrderCard from './HistoryOrderCard.jsx';

const HistoryShelf = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosHistory());
  }, [dispatch]);

  const orderHistory = useSelector(getOrderHistory);
  const {isLoading, error} = useSelector(state => state.history)
  return (
    <div className='history-shelf'>
      {isLoading && <span style={{ margin: (0, 'auto'), padding: 30 }}>Loading order history...</span>}
      {error && <span style={{fontSize: 25, textAlign: 'center', color: 'red', margin: (0, 'auto'), padding: 30 }}>Error: { error }</span>}
      {orderHistory.map(order => 
        <HistoryOrderCard order={order} key={ order._id } />
      )}
    </div>
  )
};

export default HistoryShelf