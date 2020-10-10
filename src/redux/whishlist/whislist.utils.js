export const whishListFinder = (collections) => {
  return Object.keys(collections)
    .map((key) => collections[key])
    .map((i) => i.items.filter((it) => it.wished === true))
    .reduce((a, b) => [...a, ...b], []);
};

export const removeItemFromWishlist = (wishlistItems, wishlistItemToRemove) => {
  wishlistItems.filter(
    (wishlistItem) => wishlistItem.id === wishlistItemToRemove.id
  );
};
