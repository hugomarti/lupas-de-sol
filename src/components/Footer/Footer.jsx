import React from "react";
import { Anchor, Box, Footer, Text } from "grommet";
import {
  Grommet as GrommetIcon,
  FacebookOption,
  Instagram,
  Twitter,
} from "grommet-icons";

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
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
  <Footer background="dark-1" pad="2rem" margin={{ top: "2rem" }}>
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
  </Footer>
);

export default FooterApp;
