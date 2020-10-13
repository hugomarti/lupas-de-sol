import React from "react";
import { Box, Heading, Paragraph } from "grommet";

const CollectionSelectContent = ({ data }) => {
  const { title, description } = data;
  return (
    <Box
      background="rgba(0,0,0,0.4)"
      width="100%"
      height="100%"
      hoverIndicator={{ color: "rgba(0,0,0,0)" }}
      align="center"
      justify="center"
    >
      <Box alignSelf="center" margin="2.5rem">
        <Heading color="white" level={4} size="large">
          {title}
        </Heading>
        {description && (
          <Paragraph size="small" color="white">
            {description}
          </Paragraph>
        )}
      </Box>
    </Box>
  );
};

export default CollectionSelectContent;
