import React from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import CollectionSelectItem from "./CollectionSelectItem";
import { COLLECTION_SELECT } from "../../data/collectionSelect-data";
import ColSelectGridItem from "./ColSelectGridItem";

const CollectionSelect = () => {
  const collections = COLLECTION_SELECT;

  return (
    <Box>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box direction="row" wrap justify="center">
              {collections.map((item) => (
                <CollectionSelectItem key={item.id} data={item} />
              ))}
            </Box>
          ) : (
            <Grid
              rows={["21vh", "28vh"]}
              columns={["fit", "fit", "fit"]}
              gap="small"
              pad={
                (size === "large" ? { horizontal: "" } : { horizontal: "1rem" },
                { vertical: "1rem" })
              }
              areas={[
                { name: "guarantee", start: [0, 1], end: [2, 1] },
                { name: "bestSellers", start: [0, 0], end: [0, 0] },
                { name: "woman", start: [1, 0], end: [1, 0] },
                { name: "man", start: [2, 0], end: [2, 0] },
              ]}
            >
              {collections.map((item) => (
                <ColSelectGridItem key={item.id} data={item} />
              ))}
            </Grid>
          )
        }
      </ResponsiveContext.Consumer>
    </Box>
  );
};

export default CollectionSelect;
