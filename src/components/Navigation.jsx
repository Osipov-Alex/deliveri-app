import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='title-nav'>
        <span>
          <Link to='/shop'>Shop</Link>
        </span>
        <span className='tower'> | </span>
        <span>
          <Link to='shoping-cart'>Shoping Cart</Link>
        </span>
      </div>
      <Outlet />
    </div>
  )
}

export default Navigation