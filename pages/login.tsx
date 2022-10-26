import { useRouter } from "next/router";
import React from "react";
import LoginForm from "../components/LoginForm";
import { useGetMeQuery } from "../graphql/generated/schema";
import { useAuth } from "../hooks/useAuth";

const Login: React.FC = () => {
  const { me } = useAuth();
  const router = useRouter();

  if (me) {
    router.push("/chat");
  }

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
