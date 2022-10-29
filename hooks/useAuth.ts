import { useGetMeQuery } from "../graphql/generated/schema";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie } from 'cookies-next';
import jwt_decode from "jwt-decode";

export const useAuth = () => {
  let decoded;
  const token = getCookie('token');
  if (token) {
    decoded = jwt_decode(token);
  }

  const router = useRouter();

  useEffect(() => {
    if (!decoded) {
      router.replace("/login");
    }
  }, [decoded])

  return {
    me: decoded && {
      id: decoded?.id,
      email: decoded?.email,
      username: decoded?.username,
    },
    token
  }
};
