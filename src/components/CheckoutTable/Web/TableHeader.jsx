import React from "react";
import { TableCell, TableHeader, TableRow, Text } from "grommet";

const columns = [
  {
    id: 1,
    label: "Item",
    align: "left",
  },
  {
    id: 2,
    label: "Price",
    align: "center",
  },
  {
    id: 3,
    label: "Quantity",
    align: "center",
  },
  {
    id: 4,
    label: "Total",
    align: "center",
  },
  {
    id: 5,
    label: "Delete",
    align: "center",
  },
];

const TableHeaderWeb = () => {
  return (
    <React.Fragment>
      <TableHeader>
        <TableRow>
          {columns.map((c) => (
            <TableCell key={c.id} scope="col" align={c.align}>
              <Text>{c.label}</Text>
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
    </React.Fragment>
  );
};

export default TableHeaderWeb;
