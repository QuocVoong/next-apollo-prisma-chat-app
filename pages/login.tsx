import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";

const Login: React.FC = () => {
  const { me } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (me) {
      router.push("/chat");
    }
  }, [me])

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
