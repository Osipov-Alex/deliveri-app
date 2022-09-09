// import image from '../images/nectarin.png'
// import axios from 'axios';
// import { useDispatch } from 'react-redux'

// const dispatch = useDispatch()
// axios.get('http://localhost:3000/api/products').then(response  => {
//   dispatch({type:'ADD_PRODUCT_FROM_DB', payload: response.data })
// }).catch(error => {
//   console.log(error)
// })

const defaultState = {
  products: [

  ]
}

// const defaultState = {
//   products: [
//     { productName: 'Nectarine', price: 30, id: 'Nectarine', shop: 'NOVUS' },
//     { productName: 'Watermelon', price: 10, id: 'Watermelon', shop: 'NOVUS' },
//     { productName: 'Melon', price: 15, id: 'Melon', shop: 'NOVUS' },
//     { productName: 'Nectarines', price: 30, id: 'Nectarines', shop: 'SILPO' },
//     { productName: 'Watermelons', price: 10, id: 'Watermelons', shop: 'SILPO' },
//     { productName: 'Melons', price: 15, id: 'Melons', shop: 'VARUS' },
//     { productName: 'Nectarine', productImage: image, price: 30, id: 'Nectarine', shop: 'SILPO'},
//     { productName: 'Watermelon', productImage: image, price: 10, id: 'Watermelon', shop: 'SILPO' },
//     { productName: 'Melon', productImage: image, price: 15, id: 'Melon', shop: 'SILPO' },
//   ]
// }

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_FROM_DB':
      return { ...state, products: action.payload}
    default:
      return state
  }
}

export default productReducer