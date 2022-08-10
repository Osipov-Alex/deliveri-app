import React from 'react'

const Magazine = (props) => {
  return (
    <div className='magazine'> 
      <button className='magazine-button'>{props.magazine.name}</button>
    </div>
  )
}

export default Magazine