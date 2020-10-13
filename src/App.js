import React from "react";
import { Box } from "grommet";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.action";
import { updateCollections } from "./redux/shop/shop.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import HeaderApp from "./components/Navbar/HeaderApp";
import HomePage from "./Pages/Home";
import SelectedCollectionPage from "./Pages/SelectedCollection";
import FooterApp from "./components/Footer/Footer";
import CheckoutPage from "./Pages/Checkout";
import CollectionsPage from "./Pages/Collections";
import SignInAndSignup from "./Pages/SignInAndSignup";
import WithSpinner from "./components/WithSpinner/WithSpinner";

const CollectionsPageWithSpinner = WithSpinner(CollectionsPage);
const SelectedCollectionPageWithSpinner = WithSpinner(SelectedCollectionPage);

class App extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser, updateCollections } = this.props;

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

    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { loading } = this.state;
    return (
      <Box>
        <HeaderApp />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage isLoading={loading} />}
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignup />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/shop"
            render={(props) => (
              <CollectionsPageWithSpinner isLoading={loading} {...props} />
            )}
          />
          <Route
            path="/shop/:categoryId"
            render={(props) => (
              <SelectedCollectionPageWithSpinner
                isLoading={loading}
                {...props}
              />
            )}
          />
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
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
