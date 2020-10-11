import React from "react";
import { Box } from "grommet";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

import HeaderApp from "./components/Navbar/HeaderApp";
import HomePage from "./Pages/Home";
import SelectedCollectionPage from "./Pages/SelectedCollection";
import FooterApp from "./components/Footer/Footer";
import CheckoutPage from "./Pages/Checkout";
import CollectionsPage from "./Pages/Collections";
import SignInAndSignup from "./Pages/SignInAndSignup";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Box>
        <HeaderApp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignup />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/shop" component={CollectionsPage} />
          <Route path="/shop/:categoryId" component={SelectedCollectionPage} />
        </Switch>
        <FooterApp />
      </Box>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
