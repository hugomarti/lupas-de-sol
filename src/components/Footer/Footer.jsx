import React from "react";
import { Anchor, Box, Footer, ResponsiveContext, Text } from "grommet";
import {
  Grommet as GrommetIcon,
  FacebookOption,
  Instagram,
  Twitter,
} from "grommet-icons";

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center" margin="1rem">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/"
      icon={<Instagram color="white" />}
    />
    <Anchor
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="white" />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color="white" />}
    />
  </Box>
);

const FooterApp = () => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Footer background="dark-1" pad="1rem" margin={{ top: "2rem" }}>
        <Box
          direction={size === "small" ? "column" : "row"}
          justify="between"
          align="center"
          width="85vw"
          margin="auto"
        >
          <Box align="center" direction="row" gap="xsmall">
            <GrommetIcon color="white" size="medium" />
            <Text alignSelf="center" color="white" size="small">
              Lupas De Sol
            </Text>
          </Box>
          <Media />
          <Text textAlign="center" size="xsmall">
            ©Lupas de Sol Copyright
          </Text>
        </Box>
      </Footer>
    )}
  </ResponsiveContext.Consumer>
);

export default FooterApp;
