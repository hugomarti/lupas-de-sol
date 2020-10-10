import React from "react";
import { Heading, Paragraph } from "grommet";

const BrandingText = ({ children }) => (
  <React.Fragment>
    <Heading>Lupas De Sol</Heading>
    {children}
    <Paragraph textAlign="center" margin={{ vertical: "2rem" }}>
      TRUE crafts naturally comfortable glasses that transcends the links. Using
      only the finest materials, our sunglasses protect you from the sun and
      match your daily outfit. As a collective we aim to inspire each other to
      achieve camaraderie, wellness and purpose in the pursuit of par.
    </Paragraph>
  </React.Fragment>
);

export default BrandingText;
