import React from 'react';
import HistoryProductCard from './HistoryProductCard';

const HistoryOrderCard = ({ order }) => {

  const { products, totalPrice } = order;

  return (
    <div className='history-order-card'>
      <div className='history-order-shelf'>
        {products.map(product => 
        <HistoryProductCard product={product} key={ product._id } />
        )}
      </div>
      <div className='history-order-price'>
        <span>Total Price:</span><br /><span>{ totalPrice }</span>
      </div>
    </div>
  )
};

export default HistoryOrderCard