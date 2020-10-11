import React, { useState } from "react";
import { Box, Form, FormField, TextInput, Button, Text, Card } from "grommet";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const Signin = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = value;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setValue({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card pad="2rem" width="500px" margin="1rem">
      <Box margin={{ bottom: "2rem" }}>
        <Text size="large" weight={500}>
          Sign In
        </Text>
        <Text color="dark-3" size="medium" weight={300}>
          I already have an account.
        </Text>
      </Box>
      <Form
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
        onSubmit={handleSubmit}
      >
        <FormField name="email" label="Email">
          <TextInput type="email" name="email" />
        </FormField>
        <FormField name="password" label="Password">
          <TextInput type="password" name="password" />
        </FormField>
        <Box
          direction="row"
          gap="medium"
          justify="around"
          margin={{ top: "2rem" }}
        >
          <Button
            type="submit"
            primary
            label="Sign In"
            onClick={handleSubmit}
          />
          <Button
            primary
            color="#4285f4"
            onClick={signInWithGoogle}
            label={
              <Box>
                <Text color="white">Google Sign In</Text>
              </Box>
            }
          />
        </Box>
      </Form>
    </Card>
  );
};

export default Signin;
