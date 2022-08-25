import React from 'react'
import { useSelector } from 'react-redux'
import Shop from './Shop'

const Shops = () => {
  const shops = useSelector(state => state.shop.shops)
  return (
    <div className='magazines'>
      <span className='title-magazine'><strong>Shops:</strong></span>
      {shops.map(shop => 
        <Shop shop={shop} key={shop.id} />
      )}
    </div>
  )
}

export default Shops