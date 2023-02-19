import React from "react";
import Head from "next/head";
import Image from "next/image";
import Hand from "@/public/assets/hand.png";
import Locker from "@/public/assets/locker.png";
import Footer from "@/components/Footer/Footer";
import ClaimNft from "@/components/Button/ClaimNft";
import Navbar1 from "@/components/Navbar/Navbar1";
import curve1 from "@/public/assets/curve1.png";
import curve2 from "@/public/assets/curve2.png";
import curve3 from "@/public/assets/curve3.png";
import curve4 from "@/public/assets/curve4.jpg"
import { Video3 } from "@/components/Livepeer";

function docs() {
  const [show, setShow] = React.useState(false);
  const onClick = () => setShow(!show);

  return (
    <>
    <Head>
        <title>Curve Finance | Saave Finance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar1 />
      <div className="flex flex-col space-y-48 items-center justify-center mt-10 md:mt-24 p-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
           Curve Finance
          </h1>
          <div className="flex flex-wrap items-center justify-center p-8 md:p-10 ">
            <p className="text-white text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            Curve Finance is a decentralized finance (DeFi) platform that allows users to trade stablecoins and earn fees in the process. Stablecoins are cryptocurrencies that are pegged to the value of a stable asset, such as the US dollar, which makes them less volatile than other cryptocurrencies like Bitcoin.
            </p>
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer"
                // src={Ghost.src}
                src={curve1.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            What Curve Finance does?
          </h1>
          <div className="flex flex-wrap items-center justify-center p-8 md:p-10 ">
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer"
                // src={Ghost.src}
                src={curve2.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
            <p className="text-white text-left md:text-right w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            Curve Finance operates on the Ethereum blockchain and uses smart contracts to execute trades between different stablecoins, such as USDT, USDC, DAI, and others. The platform is designed to minimize slippage, which is the difference between the expected price of a trade and the actual price that is received due to market fluctuations.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            Features of Curve Finance :
          </h1>
          <div className="flex flex-wrap items-center justify-center p-8 md:p-10 ">
            <p className="text-white text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            One of the unique features of Curve Finance is that it uses a liquidity pool model. This means that users can add their stablecoins to a pool and earn fees on the trades that occur within that pool. These fees are paid out in the form of CRV tokens, which are the native token of the Curve Finance platform.
            </p>
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer"
                // src={Ghost.src}
                src={curve3.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
          Conclusion
          </h1>
          <div className="flex flex-wrap items-center justify-center p-8 md:p-10 ">
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer"
                // src={Ghost.src}
                src={curve4.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
            <p className="text-white text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            Overall, Curve Finance is a promising platform for trading stablecoins and earning fees through liquidity pools. It's just one example of the many innovative applications of blockchain technology in the world of finance, and it's definitely worth exploring if you're interested in cryptocurrency and DeFi.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center w-[80%] h-[550px] mx-auto mb-3"
        onClick={onClick}
      >
        <Video3 />
      </div>
      <ClaimNft />
      <Footer />
    </>
  );
}

export default docs;
