import React from "react";
import { Box } from "grommet";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionPreview from "../components/Collections/CollectionPreview";

const SelectedCollectionPage = () => {
  const match = useRouteMatch();
  const collections = useSelector((state) => state.shop.collections);

  const matchCollections = collections[match.params.categoryId];

  return (
    <Box pad={{ top: "12vh" }} height={{ min: "89vh" }}>
      <CollectionPreview data={matchCollections} />
    </Box>
  );
};

export default SelectedCollectionPage;
