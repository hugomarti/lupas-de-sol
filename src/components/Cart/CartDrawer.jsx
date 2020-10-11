import React from "react";
import { Box, Button, Heading, Layer, Text } from "grommet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Close } from "grommet-icons";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { handleCartTotal } from "../../redux/cart/cart.utils";

import CartItem from "./CartItem";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.cart.hidden);
  const items = useSelector((state) => state.cart.cartItems);

  const history = useHistory();

  return (
    <Box>
      {open && (
        <Layer
          position="right"
          full="vertical"
          modal
          onClickOutside={() => dispatch(toggleCartHidden())}
          onEsc={() => dispatch(toggleCartHidden())}
        >
          <Box as="form" fill="vertical" width="medium" pad="medium">
            <Box
              direction="row"
              justify="between"
              width="medium"
              pad={{ vertical: "medium" }}
            >
              <Heading level={2} margin="none">
                Cart Items
              </Heading>
              <Button
                icon={<Close />}
                onClick={() => dispatch(toggleCartHidden())}
              />
            </Box>
            {items.length === 0 ? (
              <Box height="100%" justify="center" align="center">
                <Text weight="500">Your cart is empty.</Text>
              </Box>
            ) : (
              <Box height="100%" overflow="scroll">
                {items.map((items) => (
                  <CartItem item={items} />
                ))}
              </Box>
            )}
            <Box direction="column" justify="between" as="footer">
              <Heading>Total: ${handleCartTotal(items)}</Heading>
              <Button
                type="submit"
                label="Go To Checkout"
                onClick={() => {
                  history.push("/checkout");
                  dispatch(toggleCartHidden());
                }}
                primary
                margin={{ bottom: "2rem" }}
              />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default CartDrawer;
