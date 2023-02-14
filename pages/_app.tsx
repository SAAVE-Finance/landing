import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAuth } from "../auth/getArcanaAuth";
import { ProvideAuth } from "../auth/useArcanaAuth";

const auth = getAuth();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProvideAuth provider={auth}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ProvideAuth>
    </>
  );
}
