import React from "react";
import { Box, Image, Text } from "grommet";
import { Trash } from "grommet-icons";
import { useDispatch } from "react-redux";

import { removeFromWishlist } from "../../redux/whishlist/whishlist.actions";

const WishlistItem = ({ item }) => {
  const { image, title, price } = item;
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
      width="300px"
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
          <Text weight={600}>{title}</Text>
        </Box>
        <Box direction="row" margin={{ top: "0.5rem" }}>
          <Box width="50%">
            <Text color="brand">${price}</Text>
          </Box>
          <Box width="50%">
            <Trash
              onClick={() => {
                dispatch(removeFromWishlist(item));
              }}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WishlistItem;
