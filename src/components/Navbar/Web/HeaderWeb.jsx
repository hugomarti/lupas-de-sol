import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Header } from "grommet";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { useDispatch } from "react-redux";

import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import CartDrawer from "../../Cart/CartDrawer";
import CartIcon from "../CartIcon";
import NavTabsWeb from "./NavTabsWeb";

const HeaderWeb = ({ onItemsCount }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Box
      style={{ position: "fixed", top: 0 }}
      background="white"
      margin="auto"
      width="100%"
      elevation="medium"
      height={{ min: "8vh" }}
      justify="center"
    >
      <Header>
        <Box
          direction="row"
          width="85vw"
          margin="auto"
          justify="between"
          align="center"
        >
          <Box width="30%">
            <Logo
              onClick={() => history.push("/")}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box direction="row" align="center" width="60%" justify="end">
            <NavTabsWeb />
            <CartIcon
              onHidden={() => dispatch(toggleCartHidden())}
              onItemsCount={onItemsCount}
            />
          </Box>
        </Box>
      </Header>
      <CartDrawer />
    </Box>
  );
};

export default HeaderWeb;
