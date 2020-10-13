import React, { useState } from "react";
import { Anchor, Box, Button, Image, Text } from "grommet";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import CollectionDescrip from "./CollectionDescrip";
import NotificationAddCart from "../Notification/NotificationAddCart";

const CollectionItem = ({ data }) => {
  const [modalItem, setModalItem] = useState(false);
  const [openCartN, setOpenCartN] = useState(false);
  const { title, image, price } = data;
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setModalItem(false);
  };

  const handleCloseCartNot = () => {
    setOpenCartN(false);
  };

  const handleTimeoutCart = () => {
    setTimeout(() => {
      setOpenCartN(false);
    }, 3000);
  };

  return (
    <Box margin="medium">
      <Box
        style={{ cursor: "pointer" }}
        onClick={() => setModalItem(!modalItem)}
      >
        <Image height="260px" src={image} />
      </Box>
      <Box>
        <Box
          direction="row"
          align="center"
          justify="between"
          margin={{ top: "1rem" }}
        >
          <Text weight={500} size="large">
            {title}
          </Text>
          <Text>${price}</Text>
        </Box>

        <Anchor
          onClick={() => setModalItem(!modalItem)}
          label="More Info"
          color="#3994BA"
          margin={{ vertical: "1rem" }}
        />

        <Button
          primary
          size="medium"
          label="Add To Cart"
          margin={{ vertical: "small" }}
          color="brand"
          onClick={() => {
            dispatch(addItemToCart(data));
            setOpenCartN(true);
            handleTimeoutCart();
          }}
        />
      </Box>
      <CollectionDescrip
        toggle={modalItem}
        onClose={handleModalClose}
        data={data}
      />
      <NotificationAddCart
        open={openCartN}
        onClose={handleCloseCartNot}
        name={title}
      />
    </Box>
  );
};

export default CollectionItem;
