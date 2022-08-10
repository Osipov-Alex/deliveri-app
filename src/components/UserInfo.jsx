import React, {useState} from 'react'

const UserInfo = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [userAdress, setUserAdress] = useState('')
  
  return (
    <div className='user-data'>
      <div className='name data-element'>
        <span>Name:</span>
        <input
          className='input'
          type='text'
          placeholder='How is your name?'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </div>
      <div className='email data-element'>
        <span>Email:</span>
        <input
          className='input'
          type='text'
          placeholder='What is your email?'
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
        />
      </div>
      <div className='phone data-element'>
        <span>Phone:</span>
        <input
          className='input'
          type='text'
          placeholder='What is your phone number?'
          value={userPhoneNumber}
          onChange={e => setUserPhoneNumber(e.target.value)}
        />
      </div>
      <div className='address data-element'>
        <span>Address:</span>
        <input
          className='input'
          type='text'
          placeholder='Where do you live?'
          value={userAdress}
          onChange={e => setUserAdress(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UserInfo