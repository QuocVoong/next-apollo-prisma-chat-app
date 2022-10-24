import React, { useCallback, useState } from "react";
import { Box, Button, Flex, Text, Link, Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import NextLink from "next/link";
import * as Yup from "yup";
import { useLoginUserMutation } from "../graphql/generated/schema";
import { InputField } from "./InputField";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Required"),
    password: Yup.string().required("Password is required"),
  });

  const navigateChat = useCallback(() => {
    return router.push('/chat');
  }, [router])

  const [login] = useLoginUserMutation({});
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
        Login
      </Text>
      {error && <Alert status='error'>
        <AlertIcon />
        <AlertDescription>{error}</AlertDescription>
      </Alert>}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={async ({ email, password }) => {
          const { data, errors } = await login({
            variables: {
              input: {
                email,
                password,
              }
            },
          });
          if (errors) {
            setError(errors[0].message);
          } else {
            navigateChat();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField label="Email" name="email" />
            <InputField label="Password" name="password" isPassword/>
            <Text fontWeight="300" textAlign="center" my={6}>
              Don't have an account?{" "}
              <NextLink href="/register">
                <Link fontWeight="500" color="_purple">
                  Register
                </Link>
              </NextLink>
            </Text>
            <Flex justifyContent="center" mt={2}>
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
                Login
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
