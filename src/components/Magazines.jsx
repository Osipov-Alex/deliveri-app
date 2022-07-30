import React, {useState} from 'react'
import Magazine from './Magazine'

const Magazines = () => {
  const [magazines, setMagazines] = useState([
    { name: 'ATB' },
    { name: 'Silpo' },
    { name: 'Novus' },
    // { name: 'Varus' },
    // { name: 'ATB' },
    // { name: 'Silpo' },
    // { name: 'Novus' },
    // { name: 'ATB' },
    // { name: 'Silpo' },
    // { name: 'Novus' },
  ])
  return (
    <div className='magazines'>
      <span className='title-magazine'><strong>Shops:</strong></span>
      {magazines.map(magazine => 
        <Magazine magazine={magazine}/>
      )}
    </div>
  )
}

export default Magazines