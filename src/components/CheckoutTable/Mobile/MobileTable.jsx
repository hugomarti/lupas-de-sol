import { Box, Text } from "grommet";
import React from "react";
import MobileTableItem from "./MobileTableItem";

const MobileTable = ({ items }) => {
  return (
    <Box>
      {items.length === 0 ? (
        <Box height="30vh" align="center" justify="center">
          <Text textAlign="center">Your cart is empty.</Text>
        </Box>
      ) : (
        items.map((item) => <MobileTableItem key={item.id} item={item} />)
      )}
    </Box>
  );
};

export default MobileTable;
