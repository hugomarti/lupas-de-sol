import React from "react";
import { Box, Menu, Text } from "grommet";
import { useHistory } from "react-router-dom";
import { auth } from "../../../firebase/firebase.utils";
import { useSelector } from "react-redux";

const NavTabsWeb = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Box
      direction="row"
      margin={{ right: "2rem" }}
      justify="between"
      align="center"
      pad={{ vertical: "0.5rem" }}
    >
      <Menu
        label="Collections"
        items={[
          {
            label: "Woman",
            onClick: () => {
              history.push("/shop/woman");
            },
          },
          {
            label: "Man",
            onClick: () => {
              history.push("/shop/man");
            },
          },
          {
            label: "Best Sellers",
            onClick: () => {
              history.push("/shop/best-sellers");
            },
          },
          {
            label: "Summer",
            onClick: () => {
              history.push("/shop/summer-collection");
            },
          },
          {
            label: "Pre Order",
            onClick: () => {
              history.push("/shop/pre-order");
            },
          },
        ]}
      />
      <Box
        onClick={() => history.push("/checkout")}
        margin={{ horizontal: "1rem" }}
      >
        <Text>Checkout</Text>
      </Box>
      {currentUser ? (
        <Box onClick={() => auth.signOut()} margin={{ left: "1rem" }}>
          <Text>Sign Out</Text>
        </Box>
      ) : (
        <Box onClick={() => history.push("/signin")} margin={{ left: "1rem" }}>
          <Text>Sign In</Text>
        </Box>
      )}
    </Box>
  );
};

export default NavTabsWeb;
