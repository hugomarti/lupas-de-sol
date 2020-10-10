import { wishlistTypes } from "./whishlist.types";

const INITIAL_STATE = {
  wishlistItems: [],
};

export const whishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wishlistTypes.ADD_ITEM_WISHLIST:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    case wishlistTypes.REMOVE_ITEM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
