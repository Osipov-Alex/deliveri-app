import React from 'react'
import Magazines from './Magazines'
import MagazineShelf from './MagazineShelf'

const MagazinesContent = () => {
  return (
    <div className='magazines-content'>
      <Magazines />
      <MagazineShelf />
    </div>
  )
}

export default MagazinesContent