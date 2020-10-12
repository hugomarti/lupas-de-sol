import React, { useState } from "react";
import { Anchor, Box, Button, Image, Text } from "grommet";
import { useDispatch } from "react-redux";
import { Favorite } from "grommet-icons";

import { addItemToCart } from "../../redux/cart/cart.actions";
import { addItemToWishlist } from "../../redux/whishlist/whishlist.actions";

import CollectionDescrip from "./CollectionDescrip";
import NotificationWishlist from "../Notification/NotificactionWishlist";
import NotificationAddCart from "../Notification/NotificationAddCart";

const CollectionItem = ({ data }) => {
  const [modalItem, setModalItem] = useState(false);
  const [openWishlistNot, setOpenWishlistNot] = useState(false);
  const [openCartN, setOpenCartN] = useState(false);
  const { title, image, price } = data;
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setModalItem(false);
  };

  const handleCloseWishNot = () => {
    setOpenWishlistNot(false);
  };

  const handleTimeoutWish = () => {
    setTimeout(() => {
      setOpenWishlistNot(false);
    }, 3000);
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
        <Box direction="row" align="center" justify="between">
          <Anchor
            onClick={() => setModalItem(!modalItem)}
            label="More Info"
            color="#3994BA"
          />
          <Button
            icon={<Favorite color="brand" />}
            hoverIndicator
            onClick={() => {
              dispatch(addItemToWishlist(data));
              setOpenWishlistNot(true);
              handleTimeoutWish();
            }}
          />
        </Box>
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
      <NotificationWishlist
        open={openWishlistNot}
        onClose={handleCloseWishNot}
        name={title}
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
