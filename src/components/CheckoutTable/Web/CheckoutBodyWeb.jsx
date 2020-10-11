import React from "react";
import { Box, Image, TableCell, TableRow, Text } from "grommet";
import { Trash } from "grommet-icons";
import { useDispatch } from "react-redux";

import {
  removeItem,
  addItemToCart,
  clearItemFromCart,
} from "../../../redux/cart/cart.actions";

const CheckoutBodyWeb = ({ data }) => {
  const { title, price, quantity, image } = data;
  const dispatch = useDispatch();

  const handleItemTotal = () => {
    return quantity * price;
  };
  return (
    <TableRow>
      <TableCell>
        <Box direction="row" align="center">
          <Box height="5rem" width="5rem">
            <Image fit="cover" src={image} />
          </Box>
          <Box>
            <Text margin={{ left: "1.5rem" }}>{title}</Text>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="center" justify="center">
        <Text>${price}</Text>
      </TableCell>
      <TableCell>
        <Box direction="row" align="center" justify="center">
          <Box
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removeItem(data))}
          >
            &#10094;
          </Box>
          <Text margin={{ horizontal: "0.5rem" }}>{quantity}</Text>
          <Box
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(addItemToCart(data))}
          >
            &#10095;
          </Box>
        </Box>
      </TableCell>
      <TableCell align="center" justify="center">
        <Text>${handleItemTotal()}</Text>
      </TableCell>
      <TableCell align="center" justify="center">
        <Trash
          onClick={() => dispatch(clearItemFromCart(data))}
          style={{ cursor: "pointer" }}
        />
      </TableCell>
    </TableRow>
  );
};

export default CheckoutBodyWeb;
