import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { shopReducer } from "./shop/shop.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { whishlistReducer } from "./whishlist/whishlist.reducer";
import { userReducer } from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  cart: cartReducer,
  wishlist: whishlistReducer,
});

export default persistReducer(persistConfig, rootReducer);
