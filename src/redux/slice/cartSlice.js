import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

export const addNewOrder = createAsyncThunk(
  'cart/addNewOrder',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post('/order', data);
      return res.data
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
)

// export const addOrderToDb = createAsyncThunk(
//   'cart/addNewOrder',
//   async (_, { rejectWithValue }) => {
//     try {
//       return await axios.post('/order', {
//         name: '1',
//         email: '1',
//         phoneNumber: 1,
//         address: '1',
//         totalPrice: 3,
//         products: [],
//       }).then(res => console.log(res.data))
//     } catch (error) {
//       rejectWithValue(error.message)
//     }
//   }
// )

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [],
  },
  reducers: {
    clearCart(state) {
      state.productsInCart = []
    },
    addProduct(state, action) {
      state.productsInCart.push(action.payload);
    },
    increaseQuantity(state, action) {
      state.productsInCart = state.productsInCart.map(product => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product
        }
      })
    },
    decreaseQuantity(state, action) {
      state.productsInCart = state.productsInCart.map(product => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product
          }
        })
    },
    removeFromCart(state, action) {
      state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload);
    },
  }
});

export default cartSlice.reducer
export const { addProduct, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;