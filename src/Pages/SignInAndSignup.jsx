import React from "react";
import { Box, Text, ResponsiveContext } from "grommet";

import Signin from "../components/SignInAndSignup/Signin";
import Signup from "../components/SignInAndSignup/Signup";

const SignInAndSignup = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          pad={size === "small" ? { top: "large" } : { top: "12vh" }}
          height={{ min: "87vh" }}
          direction="column"
          width="900px"
          margin={{ horizontal: "auto" }}
        >
          <Text
            style={{ textDecoration: "underline" }}
            margin={{ top: "4rem", bottom: "4rem" }}
            color="dark-1"
            size="xxlarge"
            textAlign="center"
          >
            ACCOUNT
          </Text>
          <Box
            direction={size === "small" ? "column" : "row"}
            justify="between"
            align="center"
          >
            <Signin />
            <Signup />
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default SignInAndSignup;