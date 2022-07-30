import React from 'react'

const UserInfo = () => {
  return (
    <div className='user-data'>
      <div className='name data-element'>
        <span>Name:</span>
        <input className='input' placeholder='How is your name?' />
      </div>
      <div className='email data-element'>
        <span>Email:</span>
        <input className='input' placeholder='What is your email?' />
      </div>
      <div className='phone data-element'>
        <span>Phone:</span>
        <input className='input' placeholder='What is your phone number?' />
      </div>
      <div className='address data-element'>
        <span>Address:</span>
        <input className='input' placeholder='Where do you live?' />
      </div>
    </div>
  )
}

export default UserInfo