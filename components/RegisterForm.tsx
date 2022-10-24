import { Alert, AlertDescription, AlertIcon, Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as Yup from "yup";
import { useSignupUserMutation } from "../graphql/generated/schema";
import { InputField } from "./InputField";
import NextLink from "next/link";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
  });

  const [register] = useSignupUserMutation({});
  return (
    <Box
      bg="gray.100"
      p={8}
      w={400}
      borderRadius={12}
      boxShadow="0 2px 2px #0f0f0f04"
      sx={{
        input: {
          backgroundColor: 'gray.300'
        }
      }}
    >
      <Text fontWeight="900" fontSize={32} mb={6} color="_purple">
        Register
      </Text>
      {error && <Alert status='error'>
        <AlertIcon />
        <AlertDescription>{error}</AlertDescription>
      </Alert>}
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={async ({ email, password }) => {
          const { data, errors } = await register({
            variables: {
              input: {
                email,
                password,
              }
            },
          });
          if (errors) {
            setError(errors[0].message)
          } else {
            router.push("/chat");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField label="Email" name="email" />
            <InputField label="Password" name="password" isPassword />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              isPassword
            />
            <Text textAlign="center" my={6} fontWeight="300">
              Already have an account?{" "}
              <NextLink href="/login">
                <Link fontWeight="500" color="_purple">
                  Login
                </Link>
              </NextLink>
            </Text>
            <Flex justifyContent="center">
              <Button
                bg="_purple"
                color="white"
                type="submit"
                isLoading={isSubmitting}
                fontWeight="500"
                _hover={{
                  background: "_hoveredPurple",
                }}
              >
                Register
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterForm;
