import { wishlistTypes } from "./whishlist.types";

export const addItemToWishlist = (item) => ({
  type: wishlistTypes.ADD_ITEM_WISHLIST,
  payload: item,
});

export const removeFromWishlist = (item) => ({
  type: wishlistTypes.REMOVE_ITEM_WISHLIST,
  payload: item,
});
