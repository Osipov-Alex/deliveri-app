import React, {useState} from 'react';
import image from '../images/nectarin.png'

const ItemCart = () => {
  const [items, setItems] = useState(0)
  console.log(items)
  function clickUp(){
    setItems(Number(items) + 1)
  }

  function clickDown(){
    setItems(Number(items) - 1)
  }

  return (
    <div className='item-cart'>
      <div className='cart-image'>
        <img src={image} alt='' width='379px' height='162px' />
      </div>
      <div className='item-cart-info'>
        <div className='item-info'>
          <div className='item-name'>
            <span>Name</span>
          </div>
          <div className='item-price'>
            <span>Price: </span><span>888</span>
          </div>
        </div>
        <div className='item-count'>
          <input
            type='text'
            value={items}
            onChange={e => setItems(e.target.value)}
            className='item-input'
          />
          <div className='item-btns'>
            <button onClick={clickUp} className='item-button-up'>up</button>
            <button onClick={clickDown} className='item-button-down'>down</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCart