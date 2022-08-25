import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ShopShelf = () => {
  const shop = useSelector(state => state.shop.currentShop)
  const products = useSelector(state => state.product.products.filter(product => {
    return product.shop === shop
  }))  
  
  return (
    <div className='magazines-shelf bl'>
      { products.map(product =>
          <ProductCard product={product} key={product.productName} />
        )} 
    </div>
  )
}

export default ShopShelf