import React from "react";
import { Box, Heading, Text, ResponsiveContext } from "grommet";
import { useSelector } from "react-redux";

import { handleCartTotal } from "../redux/cart/cart.utils";

import WebTable from "../components/CheckoutTable/Web/WebTable";
import MobileTable from "../components/CheckoutTable/Mobile/MobileTable";

const CheckoutPage = () => {
  const items = useSelector((state) => state.cart.cartItems);
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          margin={{ horizontal: "auto" }}
          width="80vw"
          height={{ min: "89vh" }}
          pad={{ top: "12vh" }}
        >
          <Text
            style={{ textDecoration: "underline" }}
            margin={{ top: "4rem", bottom: "4rem" }}
            color="dark-1"
            size="xxlarge"
            textAlign="center"
          >
            CHECKOUT
          </Text>
          {size === "small" ? (
            <MobileTable items={items} />
          ) : (
            <WebTable items={items} />
          )}

          <Box width="100%" align="end" pad={{ top: "2rem", right: "2.5rem" }}>
            <Heading level={2}>Total: ${handleCartTotal(items)}</Heading>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default CheckoutPage;
