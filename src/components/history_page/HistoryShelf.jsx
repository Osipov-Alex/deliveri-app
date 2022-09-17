import React, { useEffect } from 'react';
import axios from '../../utils/axios.js';
import { useDispatch, useSelector } from 'react-redux';
import HistoryOrderCard from './HistoryOrderCard.jsx';

const HistoryShelf = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/orders').then(response => {
      dispatch({ type: 'ADD_HISTORY_FROM_DB', payload: response.data });
    }).catch(error => {
      console.log(error);
    })
  }, [dispatch]);

  const userPhoneNumber = useSelector(state => state.history.phoneNumber);
  const userEmail = useSelector(state => state.history.email);

  const orderHistory = useSelector(state => state.history.orderHistory.filter(order => {
    return order.phoneNumber === userPhoneNumber || order.email === userEmail
  }));

  return (
    <div className='history-shelf'>
      {orderHistory.map(order => 
        <HistoryOrderCard order={order} key={ order._id } />
      )}
    </div>
  )
};

export default HistoryShelf