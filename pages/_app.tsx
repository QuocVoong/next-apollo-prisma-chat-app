import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect } from "react";
import { Container } from "../components/Container";
import apolloClient from "../lib/apolloClient";
import theme from "../theme";
import "overlayscrollbars/css/OverlayScrollbars.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});

