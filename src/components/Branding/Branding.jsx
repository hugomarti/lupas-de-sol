import React from "react";
import { Box, ResponsiveContext } from "grommet";
import BrandingText from "./BrandingText";

const Branding = () => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Box
        background="dark-1"
        width="100%"
        align="center"
        justify="center"
        pad={{ horizontal: "5rem", vertical: "2rem" }}
        height={size === "small" ? "60vh" : "40vh"}
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
    )}
  </ResponsiveContext.Consumer>
);

export default Branding;
