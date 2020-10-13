import React from "react";
import { Box, Table, TableBody, Text } from "grommet";
import TableHeaderWeb from "./TableHeader";
import CheckoutBodyWeb from "./CheckoutBodyWeb";

const WebTable = ({ items }) => {
  return (
    <Table>
      <TableHeaderWeb />
      <TableBody>
        {items.length === 0 ? (
          <Box
            width="100%"
            margin={{ vertical: "2rem" }}
            justify="center"
            align="center"
            height="36vh"
          >
            <Text>Your cart is empty.</Text>
          </Box>
        ) : (
          items.map((item) => <CheckoutBodyWeb key={item.id} data={item} />)
        )}
      </TableBody>
    </Table>
  );
};

export default WebTable;
