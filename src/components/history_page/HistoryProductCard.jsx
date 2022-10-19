import React from 'react';

const HistoryProductCard = ({ product }) => {

  const { productName, image, price } = product;

  return (
    <div className='history-product-card'>
      <div >
        <img className='cart-image' src={"http://localhost:3002/" + image} alt='' width='275px' height='162px' />
      </div>
      <div className='item-cart-info'>
        <div className='history-card-item-info'>
          <div className='history-card-item-name'>
            <span>{productName}</span>
          </div>
          <div className='history-card-item-price'>
            <span>Price: </span><br /><span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryProductCard;