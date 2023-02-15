import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { getAuth } from "../auth/getArcanaAuth";
import { ProvideAuth } from "../auth/useArcanaAuth";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import * as React from "react";

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});

const auth = getAuth();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProvideAuth provider={auth}>
        {/* <Navbar /> */}
        <LivepeerConfig client={livepeerClient}>
          <Component {...pageProps} />
          {/* <Footer /> */}
        </LivepeerConfig>
      </ProvideAuth>
    </>
  );
}
