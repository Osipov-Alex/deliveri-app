import image from '../images/nectarin.png'

const defaultState = {
  products: [
    { productName: 'Nectarine', price: 30, id: 'Nectarine', shop: 'NOVUS' },
    { productName: 'Watermelon', price: 10, id: 'Watermelon', shop: 'NOVUS' },
    { productName: 'Melon', price: 15, id: 'Melon', shop: 'NOVUS' },
    { productName: 'Nectarines', price: 30, id: 'Nectarines', shop: 'SILPO' },
    { productName: 'Watermelons', price: 10, id: 'Watermelons', shop: 'SILPO' },
    { productName: 'Melons', price: 15, id: 'Melons', shop: 'VARUS' },
    { productName: 'Nectarine', productImage: image, price: 30, id: 'Nectarine', shop: 'SILPO'},
    { productName: 'Watermelon', productImage: image, price: 10, id: 'Watermelon', shop: 'SILPO' },
    { productName: 'Melon', productImage: image, price: 15, id: 'Melon', shop: 'SILPO' },
  ]
}

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default productReducer