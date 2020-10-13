import React from "react";
import { Box, Heading, Text, ResponsiveContext } from "grommet";
import { useSelector } from "react-redux";

import { handleCartTotal } from "../redux/cart/cart.utils";

import WebTable from "../components/CheckoutTable/Web/WebTable";
import MobileTable from "../components/CheckoutTable/Mobile/MobileTable";
import StripeCheckoutButton from "../components/StripeButton/StripeButton";

const CheckoutPage = () => {
  const items = useSelector((state) => state.cart.cartItems);
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          margin={{ horizontal: "auto" }}
          width="80vw"
          height={size === "small" ? { min: "70vh" } : { min: "84.5vh" }}
          pad={size === "small" ? { top: "7vh" } : { top: "12vh" }}
          justify="start"
        >
          <Text
            style={{ textDecoration: "underline" }}
            margin={{ vertical: "2rem" }}
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

          <Box
            width="100%"
            justify={size === "small" ? "center" : "end"}
            pad={
              size === "small"
                ? { top: "2rem", right: "" }
                : { top: "2rem", right: "2.5rem" }
            }
            direction="row"
            align="center"
          >
            <Box margin="2rem">
              <StripeCheckoutButton />
            </Box>
            <Heading level={2}>Total: ${handleCartTotal(items)}</Heading>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default CheckoutPage;
