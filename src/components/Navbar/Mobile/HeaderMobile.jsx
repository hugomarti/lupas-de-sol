import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Header } from "grommet";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import CartIcon from "../CartIcon";
import NavMenuMobile from "./NavMenuMobile";

const HeaderMobile = ({ onItemsCount }) => {
  const history = useHistory();

  return (
    <Box
      style={{ position: "fixed", top: 0 }}
      background="white"
      margin="auto"
      width="100%"
      elevation="medium"
      height={{ min: "8vh" }}
    >
      <Header pad="medium" width="90%" margin="auto">
        <Box direction="column" width="100%" justify="center" align="center">
          <Box
            direction="row"
            justify="between"
            align="center"
            width="100%"
            margin="auto"
          >
            <NavMenuMobile />
            <Box height="2rem">
              <Logo
                onClick={() => history.push("/")}
                style={{ cursor: "pointer" }}
              />
            </Box>
            <Box onClick={() => history.push("/checkout")}>
              <CartIcon onItemsCount={onItemsCount} />
            </Box>
          </Box>
        </Box>
      </Header>
    </Box>
  );
};

export default HeaderMobile;
