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
      {(size) => (
        <Box
          direction={size === "small" ? "column" : "row"}
          justify="center"
          align="center"
          height={size === "small" ? "" : "21vh"}
        >
          <BrandingText>
            {size === "small" ? (
              <hr style={{ width: "30vw", margin: "1rem" }} />
            ) : (
              <hr style={{ height: "10vh", margin: "3rem" }} />
            )}
          </BrandingText>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Box>
);

export default Branding;
