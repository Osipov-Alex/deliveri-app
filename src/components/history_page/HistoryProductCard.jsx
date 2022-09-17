import React from 'react';

const HistoryProductCard = (props) => {

  return (
    <div className='history-product-card'>
      <div className='cart-image'>
        <img src={props.product.image} alt='' width='275px' height='162px' />
      </div>
      <div className='item-cart-info'>
        <div className='history-card-item-info'>
          <div className='history-card-item-name'>
            <span>{props.product.productName}</span>
          </div>
          <div className='history-card-item-price'>
            <span>Price: </span><span>{props.product.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryProductCard;