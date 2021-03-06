import React from "react";
import { Box, ResponsiveContext } from "grommet";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionPreview from "../components/Collections/CollectionPreview";

const SelectedCollectionPage = () => {
  const match = useRouteMatch();
  const collections = useSelector((state) => state.shop.collections);

  const matchCollections = collections
    ? collections[match.params.categoryId]
    : null;

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          pad={size === "small" ? { top: "7vh" } : { top: "12vh" }}
          height={{ min: "89vh" }}
        >
          <CollectionPreview data={matchCollections} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default SelectedCollectionPage;
