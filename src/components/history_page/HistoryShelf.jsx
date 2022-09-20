import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHistory } from '../../redux/reducers/actions/historyActions.js';
import axios from '../../utils/axios.js';
import HistoryOrderCard from './HistoryOrderCard.jsx';


const HistoryShelf = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/orders').then(response => {
      dispatch(addHistory(response.data));
    }).catch(error => {
      console.log(error);
    })
  }, [dispatch]);

  const userPhoneNumber = useSelector(state => state.history.phoneNumber);
  const userEmail = useSelector(state => state.history.email);

  const orderHistory = useSelector(state => state.history.orderHistory.filter(order => {
    // Тут наверное лучше логическое И
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