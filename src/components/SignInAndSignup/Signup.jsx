import React, { useState } from "react";
import { Box, Form, FormField, TextInput, Button, Text, Card } from "grommet";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const Signup = () => {
  const [value, setValue] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = value;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setValue({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card pad="2rem" width="500px" margin="1rem">
      <Box margin={{ bottom: "2rem" }}>
        <Text size="large" weight={500}>
          Sign Up
        </Text>
        <Text color="dark-3" size="medium" weight={300}>
          I don't have an account.
        </Text>
      </Box>
      <Form
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
        onSubmit={handleSubmit}
      >
        <FormField name="displayName" label="Display Name">
          <TextInput type="text" name="displayName" />
        </FormField>
        <FormField name="email" label="Email">
          <TextInput type="email" name="email" />
        </FormField>
        <FormField type="password" name="password" label="Password">
          <TextInput type="password" name="password" />
        </FormField>
        <FormField name="confirmPassword" label="Confirm Password">
          <TextInput type="password" name="confirmPassword" />
        </FormField>
        <Box
          direction="row"
          gap="medium"
          justify="around"
          margin={{ top: "2rem" }}
        >
          <Button type="submit" primary label="Sign Up" />
        </Box>
      </Form>
    </Card>
  );
};

export default Signup;
