import React from "react";
import { Box, DropButton, Text } from "grommet";
import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";

const WishlistDropdown = ({ children }) => {
  const items = useSelector((state) => state.wishlist.wishlistItems);

  const duplicatesCleaner = [...new Set(items)];

  const renderItems = () => (
    <Box>
      {duplicatesCleaner.length === 0 ? (
        <Box justify="center" align="center" height="10rem" pad="2rem">
          <Text weight={500}>No whislist items selected.</Text>
        </Box>
      ) : (
        <Box pad={{ horizontal: "1rem", top: "1rem" }}>
          {duplicatesCleaner.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </Box>
      )}
    </Box>
  );

  return (
    <Box fill>
      <Box fill="vertical" width="xxsmall" background="dark-2" />
      <DropButton
        dropProps={{ align: { top: "bottom" } }}
        dropContent={renderItems()}
      >
        {children}
      </DropButton>
    </Box>
  );
};

export default WishlistDropdown;
