import React from 'react';
import HistoryShelf from './HistoryShelf';
import UserInformation from './UserInformation';

const HistotyPage = () => {
  return (
    <div className='history-page'>
      <UserInformation />
      <HistoryShelf />
    </div>
  )
}

export default HistotyPage;
