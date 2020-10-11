import { Box } from "grommet";
import React from "react";
import MobileTableItem from "./MobileTableItem";

const MobileTable = ({ items }) => {
  return (
    <Box>
      {items.length === 0 ? (
        <Box>Your cart is empty.</Box>
      ) : (
        items.map((item) => <MobileTableItem key={item.id} item={item} />)
      )}
    </Box>
  );
};

export default MobileTable;
