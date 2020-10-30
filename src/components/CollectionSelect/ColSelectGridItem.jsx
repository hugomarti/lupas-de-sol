import React from "react";
import { useHistory } from "react-router-dom";
import { Box } from "grommet";
import CollectionSelectContent from "./CollectionSelectContent";

const ColSelectGridItem = ({ data }) => {
  const { image, routeName, gridName } = data;
  const history = useHistory();

  return (
    <Box background={`url(${image})`} gridArea={gridName}>
      <Box
        background="rgba(0,0,0,0.2)"
        width="100%"
        height="100%"
        hoverIndicator={{ color: "rgba(0,0,0,0)" }}
        align="center"
        justify="center"
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`/shop/${routeName}`)}
      >
        <CollectionSelectContent data={data} />
      </Box>
    </Box>
  );
};

export default ColSelectGridItem;
