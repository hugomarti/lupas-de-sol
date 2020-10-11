import React from "react";
import { Box, Heading, Text, Button } from "grommet";
import { useHistory } from "react-router-dom";

const ContentBox = () => {
  const history = useHistory();
  return (
    <Box align="start" pad={{ vertical: "medium", horizontal: "small" }}>
      <Heading level={2} margin="0">
        Sunglasses Online Store
      </Heading>
      <Text
        size="small"
        color="white"
        margin={{ top: "small", bottom: "medium" }}
      >
        With love from Spain.
      </Text>
      <Button
        label="Shop Now"
        primary
        color="brand"
        onClick={() => history.push("/shop")}
      />
    </Box>
  );
};

export default ContentBox;
