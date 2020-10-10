import React from "react";
import { Box, Image, Text } from "grommet";
import { useDispatch } from "react-redux";
import { Trash } from "grommet-icons";

import { removeItem } from "../../redux/cart/cart.actions";

const CartItem = ({ item }) => {
  const { title, image, price, quantity } = item;
  const dispatch = useDispatch();
  return (
    <Box
      flex={false}
      direction="row"
      justify="between"
      align="center"
      pad="1rem"
      background="light-3"
      margin={{ bottom: "1rem" }}
    >
      <Box height="5rem" width="5rem">
        <Image fit="cover" src={image} />
      </Box>
      <Box
        margin={{ left: "1rem" }}
        direction="column"
        width="80%"
        justify="between"
        height="100%"
        pad={{ vertical: "0.4rem" }}
      >
        <Box direction="row" justify="between">
          <Text weight="600">{title}</Text>
          <Text margin={{ right: "0.2rem" }}>x{quantity}</Text>
        </Box>
        <Box direction="row" justify="between">
          <Text color="brand">${price}</Text>
          <Trash
            onClick={() => dispatch(removeItem(item))}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
