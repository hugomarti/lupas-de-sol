import React from "react";
import { Box, Heading, Text, Button } from "grommet";
import { useHistory } from "react-router-dom";

const ContentBox = () => {
  const history = useHistory();
  return (
    <Box align="start">
      <Heading level={1} margin="0">
        Sunglasses Online Store
      </Heading>
      <Text size="large" color="white" margin={{ vertical: "1.5rem" }}>
        With love from Spain.
      </Text>
      <Button
        size="medium"
        label="Shop Now"
        primary
        color="brand"
        onClick={() => history.push("/shop")}
      />
    </Box>
  );
};

export default ContentBox;
