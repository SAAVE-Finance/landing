import * as React from "react";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import "@rainbow-me/rainbowkit/styles.css";
import { AppProps } from "next/app";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { polygon, polygonMumbai } from "wagmi/chains";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { ArcanaConnector } from "@arcana/auth-wagmi";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

export const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Arcana Wallet",
    iconUrl: "https://avatars.githubusercontent.com/u/82495837?s=280&v=4",
    iconBackground: "#101010",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
          // appId parameter refers to App Address value in the Dashboard
          appId: `${process.env.NEXT_PUBLIC_ARCANA_APP_ID}`,
        },
      });
      return {
        connector,
      };
    },
  };
};
const connectors = ({ chains }) =>
  connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [ArcanaRainbowConnector({ chains }), metaMaskWallet({ chains })],
    },
  ]);

const { chains, provider } = configureChains(
  [polygon, polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chains) => ({
        http: `https://blissful-withered-arm.matic-testnet.discover.quiknode.pro/27f8e7344ca0c32dd52870a3517339941ce42603/`,
      }),
    }),
    publicProvider(),
  ]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors(chains),
  provider,
  // provider,
});
const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});

// const auth = getAuth();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} modalSize="compact" coolMode>
          <LivepeerConfig client={livepeerClient}>
            <Component {...pageProps} />
          </LivepeerConfig>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
