import React from "react";
import { Box, Tabs, Tab } from "grommet";
import { useHistory } from "react-router-dom";
import { navbarLinks } from "../../../data/navbar-links";

const NavTabsWeb = () => {
  const history = useHistory();
  return (
    <Box
      direction="row"
      width="50vw"
      margin="auto"
      justify="between"
      align="center"
      pad={{ vertical: "1rem" }}
    >
      {navbarLinks.map((link) => (
        <Tabs key={link.id} onClick={() => history.push(`${link.routeName}`)}>
          <Tab title={link.title} />
        </Tabs>
      ))}
    </Box>
  );
};

export default NavTabsWeb;
