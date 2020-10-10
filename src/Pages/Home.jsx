import React from "react";
import { Box } from "grommet";
import { useSelector } from "react-redux";

import HeroVideo from "../components/Hero/HeroVideo";
import CollectionSelect from "../components/CollectionSelect/CollectionSelect";
import Branding from "../components/Branding/Branding";
import CollectionPreview from "../components/Collections/CollectionPreview";

const HomePage = () => {
  const collections = useSelector((state) => state.shop.collections);
  const summer = collections.summer;
  return (
    <Box pad={{ top: "5vh" }}>
      <HeroVideo />
      <Branding />
      <CollectionSelect />
      <CollectionPreview data={summer} />
    </Box>
  );
};

export default HomePage;
