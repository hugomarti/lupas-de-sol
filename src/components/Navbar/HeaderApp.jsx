import React from "react";
import { ResponsiveContext, Box } from "grommet";
import { useSelector } from "react-redux";

import HeaderWeb from "./Web/HeaderWeb";
import HeaderMobile from "./Mobile/HeaderMobile";

const HeaderApp = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleItemCount = (items) => {
    const total = items.reduce(
      (accumulatedItems, cartItems) => accumulatedItems + cartItems.quantity,
      0
    );
    return total;
  };

  return (
    <Box style={{ zIndex: 200 }}>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <HeaderMobile onItemsCount={handleItemCount(cartItems)} />
          ) : (
            <HeaderWeb onItemsCount={handleItemCount(cartItems)} />
          )
        }
      </ResponsiveContext.Consumer>
    </Box>
  );
};

export default HeaderApp;
