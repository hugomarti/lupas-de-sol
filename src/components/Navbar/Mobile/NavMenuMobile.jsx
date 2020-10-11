import React from "react";
import { Box, Menu } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { useHistory } from "react-router-dom";
import SignInToSignUp from "./SignInToSignUp";

const NavMenuMobile = () => {
  const history = useHistory();

  return (
    <Menu
      a11yTitle="Navigation Menu"
      dropProps={{ align: { top: "bottom", right: "right" } }}
      icon={<MenuIcon color="brand" />}
      items={[
        {
          label: (
            <Box pad="small" onClick={() => history.push("/")}>
              Home
            </Box>
          ),
        },
        {
          label: (
            <Box pad="small" onClick={() => history.push("/shop")}>
              All Collections
            </Box>
          ),
        },
        {
          label: (
            <Box pad="small" onClick={() => history.push("/shop/woman")}>
              Woman
            </Box>
          ),
        },
        {
          label: (
            <Box pad="small" onClick={() => history.push("/shop/man")}>
              Man
            </Box>
          ),
        },
        {
          label: (
            <Box pad="small" onClick={() => history.push("/shop/bestSellers")}>
              Best Sellers
            </Box>
          ),
        },
        {
          label: (
            <Box pad="small" onClick={() => history.push("/shop/summer")}>
              Summer
            </Box>
          ),
        },
        {
          label: (
            <Box pad="small" onClick={() => history.push("/shop/preOrder")}>
              Pre Order
            </Box>
          ),
        },
        {
          label: (
            <Box pad="small" onClick={() => history.push("/checkout")}>
              Checkout
            </Box>
          ),
        },
        {
          label: <SignInToSignUp />,
        },
      ]}
    />
  );
};

export default NavMenuMobile;
