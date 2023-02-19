import React from "react";
import Head from "next/head";
import Image from "next/image";
import Hand from "@/public/assets/hand.png";
import Locker from "@/public/assets/locker.png";
import Footer from "@/components/Footer/Footer";
import ClaimNft from "@/components/Button/ClaimNft";
import BuyNft from "@/components/BuyNFT";
import Navbar1 from "@/components/Navbar/Navbar1";
import { Video1 } from "@/components/Livepeer";
import aave1 from "@/public/assets/aave1.png";
import aave2 from "@/public/assets/aave2.jpg";
import aave3 from "@/public/assets/aave3.png";
import aave4 from "@/public/assets/aave4.jpg";

function Docs() {
  const [show, setShow] = React.useState(false);
  const onClick = () => setShow(!show);

  return (
    <>
    <Head>
        <title>AAVE | Saave Finance </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar1 />
      <div className="flex flex-col space-y-48 items-center justify-center mt-10 md:mt-24 p-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            AAVE
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 w-full">
            <p className="text-gray-400 text-left w-full md:w-3/4 lg:w-1/3 text-xl leading-loose p-4">
            The AAVE protocol is a decentralized finance (DeFi) platform built on top of the Ethereum blockchain. DeFi refers to a new type of financial system that is built on blockchain technology, and it aims to create financial services that are more accessible, transparent, and democratic than traditional finance.
            </p>
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer object-contain"
                // src={Ghost.src}
                src={aave1.src}
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
            What AAVE Do?
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <div className="md:w-auto flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer  object-cover rounded-2xl "
                // src={Ghost.src}
                src={aave3.src}
                // src={Wallet.src}
                alt="Your Company"
                width={1000}
                height={900}
              />
            </div>
            <p className="text-gray-400 leading-loose text-left md:text-right w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            The AAVE protocol allows people to lend and borrow cryptocurrencies without the need for a traditional financial institution like a bank. Instead, the lending and borrowing are done directly between individuals using smart contracts. Smart contracts are self-executing agreements that are coded into the blockchain, so they automatically execute when certain conditions are met.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            Benefit of AAVE
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <p className="text-gray-400 leading-loose text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            One of the key benefits of the AAVE protocol is that it `&apos;` decentralized, meaning that there`&apos;` no central authority that controls it. This makes it more resistant to censorship, fraud, and other types of abuse. Additionally, the AAVE protocol is open-source, which means that anyone can see how it works and contribute to its development.
            </p>
            <div className="md:w-auto flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer  object-contain rounded-2xl"
                // src={Ghost.src}
                src={aave2.src}
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
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <div className="md:w-auto flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer  object-contain rounded-[25px]"
                // src={Ghost.src}
                src={aave4.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
            <p className="text-gray-400 leading-loose text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            Overall, the AAVE protocol is an exciting new way to participate in the cryptocurrency ecosystem and earn a return on your investment.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center w-[80%] h-[550px] mx-auto mb-3 mt-10"
        onClick={onClick}
      >
        <Video1 />
      </div>
      <ClaimNft />
      <Footer />
    </>
  );
}

export default Docs;
