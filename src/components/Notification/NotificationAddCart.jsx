import React from "react";
import { Layer, Box, Button, Text } from "grommet";
import { FormClose, StatusGood } from "grommet-icons";

const NotificationAddCart = ({ open, onClose, name }) => {
  return (
    <React.Fragment>
      {open && (
        <Layer
          position="bottom"
          modal={false}
          margin={{ vertical: "medium", horizontal: "small" }}
          onEsc={onClose}
          responsive={false}
          plain
        >
          <Box
            align="center"
            direction="row"
            gap="small"
            justify="between"
            round="medium"
            elevation="medium"
            pad={{ vertical: "xsmall", horizontal: "small" }}
            background="brand"
          >
            <Box align="center" direction="row" gap="xsmall">
              <StatusGood />
              <Text>{name} is added to your cart.</Text>
            </Box>
            <Button icon={<FormClose />} onClick={onClose} plain />
          </Box>
        </Layer>
      )}
    </React.Fragment>
  );
};

export default NotificationAddCart;
