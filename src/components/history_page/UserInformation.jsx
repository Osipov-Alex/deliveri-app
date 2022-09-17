import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const UserInformation = () => {

  const dispatch = useDispatch()

  const { email, phoneNumber } = useSelector(state => state.history)

  return (
    <div className='history-user-information'>
        <div className='email data-element history-user-element'>
        <span>Email:</span>
        <input
          className='input'
          type='text'
          placeholder='Your email?'
          value={email}
          onChange={e => dispatch({ type: 'HISTORY_USER_EMAIL', payload: e.target.value})}
        />
      </div>
      <div className='phone data-element history-user-element'>
        <span>Phone:</span>
        <input
          className='input'
          type='text'
          placeholder='Your phone number?'
          value={phoneNumber}
          onChange={e => dispatch({ type: 'HISTORY_USER_PHONE_NUMBER', payload: e.target.value})}
        />
      </div>
    </div>
  )
}

export default UserInformation;