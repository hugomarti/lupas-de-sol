import React from "react";
import { Layer, Box, Heading, Text, Button, Image } from "grommet";
import { FormClose } from "grommet-icons";

const CollectionDescrip = ({ toggle, onClose, data }) => {
  const { title, description, image, price } = data;
  return (
    <React.Fragment>
      {toggle && (
        <Layer position="center" onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="medium">
            <Box>
              <Box direction="row" justify="between" align="center">
                <Heading level={3} margin="none">
                  {title}
                </Heading>
                <Button icon={<FormClose />} onClick={onClose} />
              </Box>
              <Text color="brand" margin={{ top: "0.2rem", bottom: "0.5rem" }}>
                ${price}
              </Text>
            </Box>
            <Box height="300px" width="100%">
              <Image fit="cover" src={image} />
            </Box>
            <Text margin={{ top: "1rem" }}>{description}</Text>
          </Box>
          <Box pad="1rem">
            <Button primary label="Add To Cart" />
          </Box>
        </Layer>
      )}
    </React.Fragment>
  );
};

export default CollectionDescrip;
