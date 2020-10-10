import React from "react";
import { Box, Text } from "grommet";
import { Basket } from "grommet-icons";

const CartIcon = ({ onHidden, onItemsCount }) => {
  return (
    <Box direction="row" onClick={onHidden}>
      <Basket />

      <Text margin={{ left: "1rem" }} color="brand">
        {onItemsCount}
      </Text>
    </Box>
  );
};

export default CartIcon;
