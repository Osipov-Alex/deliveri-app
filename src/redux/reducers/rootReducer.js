import { combineReducers } from "redux";
import cartReducer from "./cart";
import historyReducer from "./history";
import productReducer from "./products";
import shopReducer from "./shops";
import userReducer from "./user";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  shop: shopReducer,
  user: userReducer,
  history: historyReducer,
})

export default rootReducer