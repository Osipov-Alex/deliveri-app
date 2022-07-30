import React from 'react'

const Magazine = (props) => {
  return (
    <div className='magazine'> 
      <span><a>{props.magazine.name}</a></span>
    </div>
  )
}

export default Magazine