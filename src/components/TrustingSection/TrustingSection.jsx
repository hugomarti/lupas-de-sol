import { Box, Heading, Paragraph, ResponsiveContext } from "grommet";
import React from "react";
import { Tag, Deliver, Calendar } from "grommet-icons";

const data = [
  {
    id: 1,
    icon: <Tag size="xlarge" color="dark-1" />,
    title: "Starting at $100",
    description: "Get sunglasses you'll love at a price that makes sense.",
  },
  {
    id: 2,
    icon: <Deliver size="xlarge" color="dark-1" />,
    title: "Fast Shipping",
    description: "From our shop to your door anywhere in Europe in 1-5 days.",
  },
  {
    id: 3,
    icon: <Calendar size="xlarge" color="dark-1" />,
    title: "30 day Joy Wear",
    description:
      "If you're not in love, send it back within 30 days for a refund.",
  },
];

const TrustingSection = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          margin={{ top: "2rem", bottom: "1rem" }}
          direction={size === "small" ? "column" : "row"}
          width="100%"
          justify="center"
          align="center"
        >
          {data.map((card) => (
            <Box
              key={card.id}
              justify="center"
              align="center"
              margin={{ horizontal: "2rem" }}
            >
              <Box height="10rem" width="100%" justify="center" align="center">
                {card.icon}
              </Box>
              <Heading
                color="dark-1"
                level={2}
                margin={{ bottom: "1rem", top: "0rem" }}
              >
                {card.title}
              </Heading>
              <Paragraph color="dark-3" textAlign="center">
                {card.description}
              </Paragraph>
            </Box>
          ))}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default TrustingSection;
