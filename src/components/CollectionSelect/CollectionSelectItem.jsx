import React from "react";
import { Box } from "grommet";
import { useHistory } from "react-router-dom";
import CollectionSelectContent from "./CollectionSelectContent";

const CollectionSelectItem = ({ data }) => {
  const { routeName, image, height } = data;
  const history = useHistory();

  return (
    <Box
      flex="grow"
      basis="medium"
      height={height}
      background={`url(${image})`}
      align="center"
      justify="center"
      style={{ cursor: "pointer" }}
      onClick={() => history.push(`/shop/${routeName}`)}
    >
      <CollectionSelectContent data={data} />
    </Box>
  );
};

export default CollectionSelectItem;
