import React from "react";
import { Box, Image, Text } from "grommet";
import { useDispatch } from "react-redux";
import { Trash } from "grommet-icons";

import {
  removeItem,
  addItemToCart,
  clearItemFromCart,
} from "../../../redux/cart/cart.actions";

const MobileTableItem = ({ item }) => {
  const { title, image, quantity, price } = item;
  const dispatch = useDispatch();
  return (
    <Box
      margin={{ bottom: "1rem" }}
      direction="row"
      width="100%"
      align="center"
      justify="between"
      background="light-3"
      pad="0.7rem"
    >
      <Box height="4rem" width="30%">
        <Image fit="cover" src={image} />
      </Box>
      <Box width="60%" margin={{ horizontal: "1rem" }}>
        <Text>{title}</Text>
        <Box
          margin={{ top: "0.5rem" }}
          direction="row"
          align="center"
          justify="between"
        >
          <Box width="30%">
            <Text>${price}</Text>
          </Box>
          <Box direction="row" align="center" width="40%">
            <Box
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(removeItem(item))}
            >
              &#10094;
            </Box>
            <Text margin={{ horizontal: "0.5rem" }}>{quantity}</Text>
            <Box
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(addItemToCart(item))}
            >
              &#10095;
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width="10%">
        <Trash
          onClick={() => dispatch(clearItemFromCart(item))}
          style={{ cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default MobileTableItem;
