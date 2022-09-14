import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserInfo = () => {

  const dispatch = useDispatch()

  const { name, address, email, phoneNumber } = useSelector(state => state.user)
  
  return (
    <div className='user-data'>
      <div className='name data-element'>
        <span>Name:</span>
        <input
          className='input'
          type='text'
          placeholder="What's your name?"
          value={name}
          onChange={e => dispatch({ type: 'NAME', payload: e.target.value})}
        />
      </div>
      <div className='email data-element'>
        <span>Email:</span>
        <input
          className='input'
          type='text'
          placeholder='Your email?'
          value={email}
          onChange={e => dispatch({ type: 'EMAIL', payload: e.target.value})}
        />
      </div>
      <div className='phone data-element'>
        <span>Phone:</span>
        <input
          className='input'
          type='text'
          placeholder='Your phone number?'
          value={phoneNumber}
          onChange={e => dispatch({ type: 'PHONE_NUMBER', payload: e.target.value})}
        />
      </div>
      <div className='address data-element'>
        <span>Address:</span>
        <input
          className='input'
          type='text'
          placeholder='Where do you live?'
          value={address}
          onChange={e => dispatch({ type: 'ADDRESS', payload: e.target.value})}
        />
      </div>
    </div>
  )
}

export default UserInfo