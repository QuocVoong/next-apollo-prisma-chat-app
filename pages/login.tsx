import { useRouter } from "next/router";
import React from "react";
import LoginForm from "../components/LoginForm";
import { useGetMeQuery } from "../graphql/generated/schema";

const Login: React.FC = () => {
  const { data } = useGetMeQuery();
  const router = useRouter();

  if (data?.getMe?.user) {
    router.push("/chat");
  }

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
