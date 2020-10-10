import React from "react";
import { Box, ResponsiveContext } from "grommet";
import BrandingText from "./BrandingText";

const Branding = () => (
  <Box
    background="dark-1"
    width="100%"
    align="center"
    justify="center"
    pad={{ horizontal: "5rem", vertical: "2rem" }}
  >
    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box direction="column" justify="center" align="center">
            <BrandingText>
              <hr style={{ width: "30vw", margin: "1rem" }} />
            </BrandingText>
          </Box>
        ) : (
          <Box direction="row" justify="center" align="center">
            <BrandingText>
              <hr style={{ height: "10vh", margin: "3rem" }} />
            </BrandingText>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </Box>
);

export default Branding;
