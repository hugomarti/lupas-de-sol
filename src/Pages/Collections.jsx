import React from "react";
import { Box } from "grommet";
import { useSelector } from "react-redux";
import CollectionPreview from "../components/Collections/CollectionPreview";

const CollectionsPage = () => {
  const collections = useSelector((state) => state.shop.collections);

  const transformedCollections = Object.keys(collections).map(
    (key) => collections[key]
  );

  return (
    <Box pad={{ top: "12vh" }}>
      {transformedCollections.map((collection) => (
        <CollectionPreview key={collection.id} data={collection} />
      ))}
    </Box>
  );
};

export default CollectionsPage;
