import React from "react";
import { Box } from "grommet";
import { Switch, Route } from "react-router-dom";

import HeaderApp from "./components/Navbar/HeaderApp";
import HomePage from "./Pages/Home";
import SelectedCollectionPage from "./Pages/SelectedCollection";
import FooterApp from "./components/Footer/Footer";
import CheckoutPage from "./Pages/Checkout";
import CollectionsPage from "./Pages/Collections";

const App = () => {
  return (
    <Box>
      <HeaderApp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/shop" component={CollectionsPage} />
        <Route path="/shop/:categoryId" component={SelectedCollectionPage} />
      </Switch>
      <FooterApp />
    </Box>
  );
};

export default App;
