import { Box, Text } from "grommet";
import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionPreview = ({ data }) => {
  const { name, items } = data;
  return (
    <Box width="80vw" margin={{ horizontal: "auto", bottom: "3rem" }}>
      <Text
        style={{ textDecoration: "underline" }}
        margin={{ vertical: "2rem" }}
        color="dark-1"
        size="xxlarge"
        textAlign="center"
      >
        {name.toUpperCase()}
      </Text>
      <Box direction="row" justify="center" margin="auto" wrap>
        {items.map((item) => (
          <CollectionItem key={item.id} data={item} />
        ))}
      </Box>
    </Box>
  );
};

export default CollectionPreview;
