import React from "react";
import {
  Layer,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Paragraph,
  ResponsiveContext,
} from "grommet";
import { FormClose } from "grommet-icons";

const CollectionDescrip = ({ toggle, onClose, data }) => {
  const { title, description, image, price } = data;
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <React.Fragment>
          {toggle && (
            <Layer
              position="center"
              modal
              onClickOutside={onClose}
              onEsc={onClose}
            >
              <Box pad="medium" width="100%">
                <Box
                  direction={size === "small" ? "column" : "row"}
                  align="center"
                >
                  <Box height="400px" width="400px">
                    <Image fit="cover" src={image} />
                  </Box>
                  <Box
                    direction="column"
                    justify="center"
                    width="80%"
                    height="100%"
                    pad={{ horizontal: "medium" }}
                  >
                    <Box
                      direction="row"
                      justify="between"
                      align="center"
                      width="100%"
                    >
                      <Heading level={3} margin="none">
                        {title}
                      </Heading>
                      <Button icon={<FormClose />} onClick={onClose} />
                    </Box>
                    <Text color="brand">${price}</Text>
                    <Paragraph>{description}</Paragraph>
                    <Box align="start">
                      <Button primary label="Add To Cart" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Layer>
          )}
        </React.Fragment>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default CollectionDescrip;
