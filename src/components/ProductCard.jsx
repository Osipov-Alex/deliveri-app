import React from 'react'

const ProductCard = (props) => {
  return (
       <div className='product-сard'>
        <div className='image-product bl'>
          <img className='img' src={props.product.productImage} alt='' width='222px' height='140px' />
        </div>
        <div className='name-product'>
          <span>{props.product.productName}</span>
        </div>
        <div className='product-button'>
          <button className='button'>add to Cart</button>
        </div>
      </div>
  )
}

export default ProductCard