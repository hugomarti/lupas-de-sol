import React from "react";
import { Box, ResponsiveContext } from "grommet";
import { useSelector } from "react-redux";
import CollectionPreview from "../components/Collections/CollectionPreview";

const CollectionsPage = () => {
  const collections = useSelector((state) => state.shop.collections);

  const transformedCollections = collections
    ? Object.keys(collections).map((key) => collections[key])
    : [];

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box pad={size === "small" ? { top: "7vh" } : { top: "12vh" }}>
          {transformedCollections.map((collection) => (
            <CollectionPreview key={collection.id} data={collection} />
          ))}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default CollectionsPage;
