import React from "react";
import { Box, Text } from "grommet";
import { auth } from "../../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const SignInToSignUp = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  return (
    <React.Fragment>
      {currentUser ? (
        <Box onClick={() => auth.signOut()}>
          <Text>Sign Out</Text>
        </Box>
      ) : (
        <Box onClick={() => history.push("/signin")}>
          <Text>Sign In</Text>
        </Box>
      )}
    </React.Fragment>
  );
};

export default SignInToSignUp;
