import React from "react";
import { Box, ResponsiveContext } from "grommet";

import HeroVideo from "../components/Hero/HeroVideo";
import CollectionSelect from "../components/CollectionSelect/CollectionSelect";
import Branding from "../components/Branding/Branding";
import TrustingSection from "../components/TrustingSection/TrustingSection";

const HomePage = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          pad={size === "large" ? { horizontal: "10%" } : { horizontal: "" }}
        >
          <HeroVideo />
          <CollectionSelect />
          <Branding />
          <TrustingSection />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default HomePage;
