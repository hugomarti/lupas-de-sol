import React from "react";
import { Box, ResponsiveContext } from "grommet";
import { useSelector } from "react-redux";

import HeroVideo from "../components/Hero/HeroVideo";
import CollectionSelect from "../components/CollectionSelect/CollectionSelect";
import Branding from "../components/Branding/Branding";
import CollectionPreview from "../components/Collections/CollectionPreview";

const HomePage = () => {
  const collections = useSelector((state) => state.shop.collections);
  const summer = collections.summer;
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          pad={size === "large" ? { horizontal: "7.5%" } : { horizontal: "" }}
        >
          <HeroVideo />
          <CollectionSelect />
          <Branding />
          <CollectionPreview data={summer} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default HomePage;
